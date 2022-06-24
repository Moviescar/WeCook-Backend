import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { stepsService } from './step.service';



@Controller('api/user')
export class stepController {
    constructor(private stepsService: stepsService) {}


}