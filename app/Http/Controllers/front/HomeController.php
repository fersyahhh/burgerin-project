<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Menu;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $bestSellers = Menu::with('category')
            ->where('is_best_seller', true)
            ->take(4)
            ->get();

        return Inertia::render('home', [
            'bestSellers' => $bestSellers,
        ]);
    }
}
