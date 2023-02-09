<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentResource extends JsonResource
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
            'text'=>$this->text,
            'likeCount'=>5,
            'atNow'=>$this->created_at->diffForHumans(),
            'user'=>[
                'id'=>$this->user->id,
                'name'=>$this->user->name,
            ],
            'attachments'=>$this->attachments->map(function($attach){
                return [
                    'id'=>$attach->id,
                    'isImg'=>$this->isImg,
                    'url'=>$this->url
                ];
            }),
            'replayes'=>static::collection($this->replayes)
        ];
    }
}
