<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Buildings extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);

        return [
            'id' => $this->id,
            'city' => $this->city,
            'building_name' => $this->building_name,
            'building_address' => $this->building_address,
            'geolocation' => $this->geolocation
        ];
    }
}
