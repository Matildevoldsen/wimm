<?php

namespace App\Http\Controllers\Additionals;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Feedback;

class FeedbackController extends Controller
{
    public function index() {

    }

    public function create(Request $request) {
        $validate = $request->validate([
            'title'         => 'required',
            'description'   => 'required',
            'url'           => 'required',
            'type'          => 'required',
            'email'         => 'email'
        ]);

        if (!$validate) {
            return response()->json([
                'data' => [
                    'success' => false,
                    'statusCode' => 200,
                    'message' => $validate,
                    'redirect' => [
                        'redirectTime' => '4000',
                        'redirectUrl' => '/',
                        'willRedirect' => true
                    ]
                ]
            ]);
        }

        $feedback = new Feedback([
            'title' => $request['title'],
            'description' => $request['description'],
            'url' => $request['url'],
            'type' => $request['type'],
            'email' => $request['email']
        ]);

        if (!$feedback) {
            return response()->json([
                'data' => [
                    'success' => false,
                    'statusCode' => 500,
                    'message' => 'This action could not be performed.',
                    'redirect' => [
                        'redirectTime' => '4000',
                        'redirectUrl' => '/',
                        'willRedirect' => true
                    ]
                ]
            ]);
        }

        return response()->json([
            'data' => [
                'success' => true,
                'statusCode' => 200,
                'message' => 'Your feedback have successfuly been submitted.',
                'redirect' => [
                    'redirectTime' => '2000',
                    'redirectUrl' => '/',
                    'willRedirect' => true
                ]
            ]
        ]);
    }

    public function delete() {

    }
}
