import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { emailDTO } from "src/models/emailDTO";
import { Repository } from 'typeorm'
import { Recipe } from "./recipe.entity";

@Injectable()
export class recipeService {
    constructor(
        @InjectRepository(Recipe)
        private recipeRepository: Repository<Recipe>
    ){}


    create(recipe: Recipe){
        this.recipeRepository.save(recipe)
    }
    
}