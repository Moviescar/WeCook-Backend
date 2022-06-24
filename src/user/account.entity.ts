import { Recipe } from "src/recipe/recipe.entity";
import { Exclude } from 'class-transformer';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Account{
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    email: string;
    
    @Column()
    @Exclude()
    password: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @OneToMany(() => Recipe, recipe => recipe.id)
    @JoinColumn({name: "recipe_id"})
    recipe: Recipe

}