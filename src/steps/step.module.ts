import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Recipe } from "src/recipe/recipe.entity";
import { stepController } from "./step.controller";
import { Step } from "./step.entity";
import { stepsService } from "./step.service";


@Module({
    imports: [TypeOrmModule.forFeature([Step, Recipe])],
    providers: [stepsService],
    controllers: [stepController]
})

export class StepModule{}