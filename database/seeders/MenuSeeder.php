<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Str;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $beefCategoryId = Category::where('name', 'Beef Burgers')->first('id')->id;
        $chickenCategoryId = Category::where('name', 'Chicken Burgers')->first('id')->id;
        $sidesCategoryId = Category::where('name', 'Sides')->first('id')->id;
        $drinksCategoryId = Category::where('name', 'Drinks')->first('id')->id;

        Menu::create([
                'category_id' => $beefCategoryId,
                'name' => 'The Classic Smash',
                'slug' => Str::slug('The Classic Smash'),
                'description' => 'Double beef patty, cheddar, house sauce, pickles, brioche...',
                'price' => 85,
                'image' => 'classic-smash.png', 
                'is_available' => true,
                'is_best_seller' => true, 
            ]);
    
            Menu::create([
                'category_id' => $chickenCategoryId,
                'name' => 'Spicy Bird',
                'slug' => Str::slug('Spicy Bird'),
                'description' => 'Crispy chicken thigh, spicy slaw, jalapeños, spicy mayo.',
                'price' => 75,
                'image' => 'spicy-bird.png',
                'is_available' => true,
                'is_best_seller' => false,
            ]);
    
            Menu::create([
                'category_id' => $beefCategoryId,
                'name' => 'Truffle Trouble',
                'slug' => Str::slug('Truffle Trouble'),
                'description' => 'Wagyu blend patty, truffle mayo, caramelized onions,...',
                'price' => 110,
                'image' => 'truffle-trouble.png',
                'is_available' => true,
                'is_best_seller' => true, 
            ]);
    
            Menu::create([
                'category_id' => $sidesCategoryId,
                'name' => 'Loaded Fries',
                'slug' => Str::slug('Loaded Fries'),
                'description' => 'Shoestring fries, cheese sauce, beef bacon bits,...',
                'price' => 45,
                'image' => 'loaded-fries.png',
                'is_available' => true,
                'is_best_seller' => false,
            ]);

            Menu::create([
                'category_id' => $beefCategoryId,
                'name' => 'The Overload',
                'slug' => Str::slug('The Overload'),
                'description' => 'Triple beef patty, triple cheddar, beef bacon, and special bbq sauce.',
                'price' => 135,
                'image' => 'the-overload.png', 
                'is_available' => true,
                'is_best_seller' => true, // Best Seller #3
            ]);

            Menu::create([
                'category_id' => $chickenCategoryId,
                'name' => 'Garlic Parmesan Chick',
                'slug' => Str::slug('Garlic Parmesan Chick'),
                'description' => 'Crispy chicken breast coated in garlic parmesan butter and herbs.',
                'price' => 78,
                'image' => 'garlic-parmesan.png',
                'is_available' => true,
                'is_best_seller' => false,
            ]);

            Menu::create([
                'category_id' => $sidesCategoryId,
                'name' => 'Umami Fries',
                'slug' => Str::slug('Umami Fries'),
                'description' => 'Fries tossed in truffle oil and topped with grated parmesan and nori.',
                'price' => 50,
                'image' => 'umami-fries.png',
                'is_available' => true,
                'is_best_seller' => true, // Best Seller #4
            ]);

            Menu::create([
                'category_id' => $drinksCategoryId, 
                'name' => 'Midnight Milkshake',
                'slug' => Str::slug('Midnight Milkshake'),
                'description' => 'Rich dark chocolate milkshake with Oreo crumbles and sea salt.',
                'price' => 42,
                'image' => 'midnight-milkshake.png',
                'is_available' => true,
                'is_best_seller' => false,
            ]);
    }

}
