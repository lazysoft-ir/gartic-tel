<?php

namespace App\Http\Controllers\Game;

use App\Http\Controllers\Controller;
use App\Http\Requests\Game\SaveRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class SaveController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(SaveRequest $request)
    {
        $image = Image::make($request->picture);
        $image->save(Storage::path("public") . "/ss.jpg");
        // return $image->response("jpg");
        // dd($request);
    }
}
