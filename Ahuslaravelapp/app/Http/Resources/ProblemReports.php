<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProblemReports extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'report_id' => $this->report_id,
            'user_id' => $this->user_id,
            'name' => $this->name,
            'phone' => $this->phone,
            'email' => $this->email,
            'geolocation' => $this->geolocation,
            'message' => $this->message,
            'image_1' => $this->image_1,
            'image_2' => $this->image_2,
            'image_3' => $this->image_3,
            'image_4' => $this->image_4
        ];
    }
}
