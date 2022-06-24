import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from 'typeorm'
import { Step } from "./step.entity";

@Injectable()
export class stepsService {
    constructor(
        @InjectRepository(Step)
        private stepsRepository: Repository<Step>
    ){}

    
}