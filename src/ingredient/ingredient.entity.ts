import { Recipe } from "src/recipe/recipe.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Ingredient{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Recipe, recipe => recipe.id)
    recipe: Recipe;

    @Column()
    ingredientName: string;

    @Column()
    amount: number

    @Column()
    amountType: string

    
}