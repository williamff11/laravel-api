<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'description', 'image', 'category_id'];

    public function getResults($filter, $totalPage)
    {
        if (!isset($filter['filter']) && !isset($filter['name']) && !isset($filter['description']))
            return $this->paginate($totalPage);

        return $this->where(function ($query) use ($filter) {
            if (isset($filter['filter'])) {
                $filtro = $filter['filter'];
                $query->where('name', $filtro);
                $query->orWhere('description', 'LIKE', "%{$filtro}%");
            }

            if (isset($filter['name']))
                $query->where('name', $filter['name']);

            if (isset($filter['description'])) {
                $description = $filter['description'];
                $query->where('description', 'LIKE', "%{$description}%");
            }
        })
            // ->toSql();dd($result);
            ->paginate($totalPage);
    }
}
