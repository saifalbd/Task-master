<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $user = User::query()->whereEmail($request->email)->first();
        if ($user && Hash::check($request->password, $user->password)) {
            $token = $user->createToken('token-name');
            $token = $token->plainTextToken;

            return response()->json(['user' => $user, 'token' => $token], 200);
        } else {
            return response()->json([
                'message' => __('auth.failed'),
                'errors' => [
                    'loginEmail' => [__('auth.failed')],
                    'loginPassword' => [__('auth.failed')],
                ]
            ], 422);
        }
    }

    public function register(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'name' => ['required', 'string'],
            'password' => ['required', 'string', 'confirmed'],
        ]);
        $password = Hash::make($request->password);
        $email = $request->email;
        $name = $request->name;
        $user =   User::create(compact('email', 'name', 'password'));
        return response()->json($user);
    }
}
