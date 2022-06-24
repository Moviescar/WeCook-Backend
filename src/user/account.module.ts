import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Recipe } from "src/recipe/recipe.entity";
import { accountController } from "./account.controller";
import { Account } from "./account.entity";
import { accountService } from "./account.service";

@Module({
    imports: [TypeOrmModule.forFeature([Account, Recipe])],
    providers: [accountService],
    controllers: [accountController]
})

export class AccountModule{}