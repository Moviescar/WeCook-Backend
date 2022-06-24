import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ingredient } from "src/ingredient/ingredient.entity";
import { Account } from "src/user/account.entity";
import { recipeController } from "./recipe.controller";
import { Recipe } from "./recipe.entity";
import { recipeService } from "./recipe.service";

@Module({
    imports: [TypeOrmModule.forFeature([Recipe, Ingredient])],
    providers: [recipeService],
    controllers: [recipeController]
})

export class RecipeModule{}