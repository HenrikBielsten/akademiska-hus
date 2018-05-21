<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\ProblemReport;
use App\Http\Resources\ProblemReports as ProblemReportsResource;


class ProblemReportsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $problemReport = ProblemReport::paginate(2);

        return ProblemReportsResource::collection($problemReport);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $problemReport = $request->IsMethod('put') ? ProblemReport::findOrFail($request->report_id) : new ProblemReport;

        $problemReport->report_id = $request->input('report_id');
        $problemReport->user_id = $request->input('user_id');
        $problemReport->name = $request->input('name');
        $problemReport->phone = $request->input('phone');
        $problemReport->email = $request->input('email');
        $problemReport->geolocation = $request->input('geolocation');
        $problemReport->message = $request->input('message');
        $problemReport->image_1 = $request->input('image_1');
        $problemReport->image_2 = $request->input('image_2');
        $problemReport->image_3 = $request->input('image_3');
        $problemReport->image_4 = $request->input('image_4');


        if ($problemReport->save()) {
            return new ProblemReportsResource($problemReport);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $report_id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $problemReport = ProblemReport::findOrFail($id);

        return new ProblemReportsResource($problemReport);
    }


}
