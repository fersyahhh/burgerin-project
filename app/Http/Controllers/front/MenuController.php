<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class MenuController extends Controller
{
    public function index()
    {
        return Inertia::render('menu');
    }
}
