<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryCotroller extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('category/index',[
            'categries'=>$categories
        ]);
    }


    public function create()
    {

        return Inertia::render('category/form_category');
    }

    public function store(Request $request)
    {
         $validate =$request->validate([
            'name'=>'required',
            'description'=>'required'
         ]);
        Category::create($validate);
         return redirect()->route('category.index');
        }
}
