<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use Illuminate\Http\Request;
use App\Models\Item;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\ItemResource;
use File;

class ItemController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user =  auth('sanctum')->user();
        $items = Item::where('user_id', $user->id)->get();
        return $this->sendResponse(ItemResource::collection($items), 'Items retrieved successfully.');
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
            'inventory_id' => 'required',
            'name' => 'required|string|max:100',
            'description' => 'string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'quantity' => "required"
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        if ($file = $request->file('image')) {
            $image = time() . $file->getClientOriginalName();
            $file->move('item', $image);
            $input['image'] = $image;
        }

        $item = Item::create($input);

        return $this->sendResponse(new ItemResource($item), 'Item created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $item = Item::find($id);
        if (is_null($item)) {
            return $this->sendError('Item not found.');
        }

        return $this->sendResponse(new ItemResource($item), 'Item retrieved successfully.');
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
            'inventory_id' => 'required',
            'name' => 'required|string|max:100',
            'description' => 'string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'quantity' => "required"
        ]);

        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        if ($file = $request->file('image')) {
            $itemImage = public_path("item/{$request->image}");
            if (File::exists($itemImage)) {
                unlink($itemImage);
            }
            $image = time() . $file->getClientOriginalName();
            $file->move('item', $image);
            $input['image'] = $image;
        }

        $item = Item::find($id);
        $item->inventory_id = $input['inventory_id'];
        $item->name = $input['name'];
        $item->description = $input['description'];
        $item->quantity = $input['quantity'];
        $item->image = $input['image'];
        $item->save();
        
        return $this->sendResponse(new ItemResource($item), 'Item updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Item::find($id);
        $item->delete();
        return $this->sendResponse([], 'Item deleted successfully.');
    }
}
