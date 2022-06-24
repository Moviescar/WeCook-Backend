import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientModule } from './ingredient/ingredient.module';
import { RecipeModule } from './recipe/recipe.module';
import { StepModule } from './steps/step.module';
import { AccountModule } from './user/account.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'maint',
      password: 'FixAllBugs',
      database: 'IKPMD-RecipeApp',
      synchronize: true,
      entities: ['dist/**/*.entity.ts'],
      autoLoadEntities: true
    }),
    AccountModule,
    RecipeModule,
    IngredientModule,
    StepModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
