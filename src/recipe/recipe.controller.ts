import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Recipe } from './recipe.entity';
import { recipeService } from './recipe.service';



@Controller('api/recipe')
export class recipeController {
    constructor(private recipeService: recipeService) {}

    @Post()
    create(@Body() recipe: Recipe){
      this.recipeService.create(recipe)
      console.log('User Created')
    }
}