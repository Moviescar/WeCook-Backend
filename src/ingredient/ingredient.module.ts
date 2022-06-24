import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Recipe } from "src/recipe/recipe.entity";
import { ingredientController } from "./ingredient.controller";
import { Ingredient } from "./ingredient.entity";
import { ingredientService} from "./ingredient.service";


@Module({
    imports: [TypeOrmModule.forFeature([Ingredient, Recipe])],
    providers: [ingredientService],
    controllers: [ingredientController]
})

export class IngredientModule{}