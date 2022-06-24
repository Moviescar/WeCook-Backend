import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ingredientService } from './ingredient.service';

@Controller('api/ingredient')
export class ingredientController {
    constructor(private ingredientService: ingredientService) {}

    
}