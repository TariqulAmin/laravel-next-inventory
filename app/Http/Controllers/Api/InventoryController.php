<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use Illuminate\Http\Request;
use App\Models\Inventory;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\InventoryResource;

class InventoryController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user =  auth('sanctum')->user();
        $inventories = Inventory::where('user_id', $user->id)->get();
        return $this->sendResponse(InventoryResource::collection($inventories), 'Inventories retrieved successfully.');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $user =  auth('sanctum')->user();
        $input["user_id"] = $user->id;

        $validator = Validator::make($input, [
            'name' => 'required|string|max:50',
            'description' => 'string'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $inventory = Inventory::create($input);

        return $this->sendResponse(new InventoryResource($inventory), 'Inventory created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $inventory = Inventory::find($id);
        if (is_null($inventory)) {
            return $this->sendError('Inventory not found.');
        }

        return $this->sendResponse(new InventoryResource($inventory), 'Inventory retrieved successfully.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $input = $request->all();
        $user =  auth('sanctum')->user();
        $input["user_id"] = $user->id;

        $validator = Validator::make($input, [
            'name' => 'required|string|max:50',
            'description' => 'string'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $inventory = Inventory::find($id);

        $inventory->user_id = $input['user_id'];
        $inventory->name = $input['name'];
        $inventory->description = $input['description'];
        $inventory->save();

        return $this->sendResponse(new InventoryResource($inventory), 'Inventory updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $inventory = Inventory::find($id);
        $inventory->delete();
        return $this->sendResponse([], 'Inventory deleted successfully.');
    }
}
