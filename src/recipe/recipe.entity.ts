import { Ingredient } from "src/ingredient/ingredient.entity";
import { Step } from "src/steps/step.entity";
import { Account } from "src/user/account.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Recipe{
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Account, account => account.id)
    owner: string

    @Column()
    name: string;

    @OneToMany(() => Ingredient, ingredient => ingredient.id)
    @JoinColumn({name: "ingredient_id"})
    ingredient: Ingredient

    @OneToMany(() => Step, step => step.id)
    @JoinColumn({name: "step_id"})
    step: Step


}