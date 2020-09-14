<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(Request $request)
    {
        $request->validate([
            'company_name' => 'required|string',
            'company_name_native' => 'required|string',
            'cr' => 'required|string',
            'vat_number' => 'required|string',
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'mobile' => 'required|string|min:10',
            'office_phone' => 'required|string|min:7',
            'office_address' => 'required|string',
            'password' => 'required|string|min:8|confirmed'
        ]);
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'mobile_no' => $request->mobile,
            'acc_type' => $request->acc_type,
            'password' => bcrypt($request->password)
        ]);
        $user->save();

        $company = new Company([
            'company_name' => $request->company_name,
            'company_name_native' => $request->company_name_native,
            'cr' => $request->cr,
            'vat' => $request->vat_number,
            'poc' => $user->id,
            'office_phone' => $request->office_phone,
            'office_address' => $request->office_address,
        ]);
        $company->save();
        return response()->json([
            'message' => "Registration successfull."
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }
        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }
    
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
