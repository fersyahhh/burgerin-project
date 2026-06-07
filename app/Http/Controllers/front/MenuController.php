<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Menu;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::with('category')->get();

        return Inertia::render('menu', [
            'categories' => Category::all(),
            'menus' => $menus,
        ]);
    }
}
