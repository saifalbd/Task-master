<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Position;
use App\Models\User;
use App\Models\UserEmployeePosition;
use App\Notifications\EmployeeAssigned;
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
        $builder = Employee::query()->with(['position']);
        $items = $request->all ? $builder->get() : $builder->paginate($request->perPage);
        return response()->json($items);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'position' => ['required', 'numeric']
        ]);

        $email = $request->email;
        $name = $request->name;
        $password = Hash::make(12345);

        $employee = User::query()->whereEmail($email)->first();
        if (!$employee) {
            $employee = Employee::create(compact('email', 'name', 'password'));
        }
        $request->user()->employees()->syncWithoutDetaching([$employee->id], false);

        $position_id = $request->position;
        $user_id = $request->user_id;
        $employee_id = $employee->id;

        UserEmployeePosition::create(compact('position_id', 'user_id', 'employee_id'));



        $employee->notify(new EmployeeAssigned($user_id));

        $employee->load('position');
        return response()->json($employee);
    }


    public function positions()
    {
        $items = Position::query()->get();
        return response()->json($items);
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
        $request->validate(['position' => ['required', 'numeric']]);


        $position_id = $request->position;
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

        $employee_id = $employee->id;
        if ($employee_id) {
            $request->user()->employees()->detach($employee_id);
            UserEmployeePosition::query()->where('user_id', $request->user_id)->where('employee_id', $employee_id)->delete();
        }
    }
}
