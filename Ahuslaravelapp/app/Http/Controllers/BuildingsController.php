<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Building;
use App\Http\Resources\Buildings as BuildingsResource;


class BuildingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $building = Building::paginate(2);

        return BuildingsResource::collection($building);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $building = $request->IsMethod('put') ? Building::findOrFail($request->building_id) : new Building;

        $building->id = $request->input('building_id');
        $building->campus = $request->input('campus');
        $building->building_name = $request->input('building_name');
        $building->building_address = $request->input('building_address');
        $building->latitude = $request->input('latitude');
        $building->longitude = $request->input('longitude');


        if ($building->save()) {
            return new BuildingsResource($building);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $building = Building::findOrFail($id);

        return new BuildingsResource($building);
    }


}
