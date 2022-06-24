import { Recipe } from "src/recipe/recipe.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Step{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Recipe, recipe => recipe.id)
    recipe: Recipe
    
    @Column("text")
    instruction: String;

}