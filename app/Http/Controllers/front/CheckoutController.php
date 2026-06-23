<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function index()
    {
        return Inertia::render('checkout');
    }
}
