<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index() {
        $categories = Category::select('id', 'name', 'slug')->get();

        $menus = Menu::with('category')
        ->where('is_available', true)
        ->take(4)
        ->get();

        $bestSellers = Menu::with('category')
        ->where('is_best_seller', true)
        ->take(4)
        ->get();

        return Inertia::render('home', [
            'categories' => $categories,
            'menus' => $menus,
            'bestSellers' => $bestSellers,
        ]);
    }
}
