<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Position;
use App\Models\User;
use App\Notifications\EmployeeAssigned;
use App\Rules\BDPhone;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {
        $builder = Employee::query()->with(['designation','model.avatar'])->where('user_id',$request->user_id);
        $items = $builder->paginate($request->perPage);
        return response()->json($items);
    }


    public function employeeProposal(Request $request)
    {
    $user_id = $request->user_id;
    return Employee::query()->where('employee_id',$user_id)->where('accepted',false)->with(['user.avatar','designation'])->get();
    }

    public function acceptProposal(Employee $employee){
       $employee->update(['accepted'=>true]);
    }
    public function denyProposal(Employee $employee){
        $employee->delete();
     }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'name' => ['required', 'string'],
            'designation' => ['required', 'numeric'],
            'phone'=> ['required', 'numeric',new BDPhone,Rule::unique('users','phone')],
            'password'=>['required','string']
        ]);

     

        $email = $request->email;
        $name = $request->name;
        $password = Hash::make($request->password);
        $phone = $request->phone;
        $avatar_id = 1;
        $designation_id = $request->designation;
        $user_id = $request->user_id;
      

        $canEmployee = Employee::query()->email($email)->first();
        if($canEmployee){
            return response()->json($canEmployee);
        }



        $canUser = User::query()->whereEmail($email)->first();
        $accepted = true;

        if($canUser){
            $employee_id = $canUser->id;
            $accepted = false;
            $user = $canUser;
        }else{
            $user = User::create(compact('email', 'name', 'password','phone','avatar_id'));
            $employee_id = $user->id;
        }

       
        $employee = Employee::create(compact('user_id','employee_id','accepted','designation_id'));

     
        $user_id = $request->user_id;
   
        $user->notify(new EmployeeAssigned($user_id));

        $employee->load(['designation','model.avatar']);
        return response()->json($employee);
    }


 

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        $employee->load('position');
        return response()->json($employee);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        $request->validate(['position' => ['required', 'numeric'],
        'phone'=> ['required', 'numeric',new BDPhone,Rule::unique('users')->ignore($employee->id)],
        ]);


        $position_id = $request->position;
        $phone = $request->phone;
        $employee->update(compact('phone'));
        $employee->position->update(compact('position_id'));
        $employee->load('position');
        return response()->json($employee);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Employee $employee)
    {

        $employee->delete();
    }
}
