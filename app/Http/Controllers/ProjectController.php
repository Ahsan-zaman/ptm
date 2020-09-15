<?php

namespace App\Http\Controllers;

use App\Models\InvitedSupplier;
use App\Models\Project;
use DateTime;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth()->user();
        $all = Project::where('company_id', $user->company_id)->get();
        return response($all, 200);
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
            'project_name' => 'required|string',
            'project_category' => 'required|string',
            'project_price' => 'required|numeric',
            'project_summary' => 'required|string',
            'boq' => 'required|string',
            'district' => 'required|string',
            'city' => 'required|string',
            'country' => 'required|string',
            'start' => 'required|date_format:Y-m-d',
            'end' => 'required|date_format:Y-m-d',
            'end_time' => 'required|date_format:H:i',
            'start_time' => 'required|date_format:H:i',
            'rfi_last_date' => 'required|date_format:Y-m-d',
            'publicRFX' => 'boolean',
            'suppliers' => 'array',
            'invite' => 'array',
        ]);
        $start_d = new DateTime($request->start. ' ' . $request->start_time);
        $start = $start_d->format('Y-m-d H:i:s');
        $end_d = new DateTime($request->end. ' ' . $request->end_time);
        $end = $end_d->format('Y-m-d H:i:s');
        $project = new Project([
            'project_name' => $request->project_name,
            'project_category' => $request->project_category,
            'project_price' => $request->project_price,
            'project_summary' => $request->project_summary,
            'boq' => $request->boq,
            'district' => $request->district,
            'city' => $request->city,
            'country' => $request->country,
            'start_date' => $start,
            'end_date' => $end,
            'project_status' => $request->project_status,
            'rfi_last_date' => $request->rfi_last_date,
            'public' => $request->publicRFX,
            'suppliers' => implode(",", $request->suppliers),
            'company_id' => auth()->user()->company_id,
            'created_by' => auth()->user()->id
        ]);
        $project->save();
        foreach ($request->invite as $inv) {
            if (isset($inv['name']) && isset($inv['email'])) {
                $invited = new InvitedSupplier([
                    'email' => $inv['email'],
                    'name' => $inv['name'],
                    'project_id' => $project->id
                ]);
                $invited->save();
            }
        }
        return response(['message' => "New project created successfully"], 200);

        // return response($request->invite[0]['name'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }
}
