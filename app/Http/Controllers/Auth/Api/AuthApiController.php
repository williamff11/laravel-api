<?php

namespace App\Http\Controllers\Auth\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\User;
use App\Http\Requests\StoreUpdateUserFormRequest;
use App\Http\Controllers\Auth\Api\Traits\AuthTrait;

class AuthApiController extends Controller
{
    use AuthTrait;

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['authenticate', 'register']]);
    }

    // somewhere in your controller
    public function getAuthenticatedUser()
    {
        $response = $this->getUser();
        if ($response['status'] !=200)
            return response()->json([$response['response']], $response['status']);

        $user = $response['response'];

        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('user'));
    }

    public function refreshToken()
    {
        if (!$token = JWTAuth::getToken())
            return response()->json(['error' => 'token_not_send'], 404);

        try {
            $token = JWTAuth::refresh();
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['toekn_invalid'], $e->getStatusCode());
        }
        return response()->json(compact('token'));
    }

   
}
