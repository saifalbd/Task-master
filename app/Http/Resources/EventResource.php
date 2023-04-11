<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'date'=>$this->date,
            'time'=>Carbon::parse($this->date.' '.$this->time)->format('h:m a'),
            'categoryName'=>$this->category->title,
            'color'=>$this->category->color
        ];
    }
}
