import { Body, ClassSerializerInterceptor, Controller, Get, Post, Req, UseInterceptors } from '@nestjs/common';
import { get } from 'http';
import { emailDTO } from 'src/models/emailDTO';
import { loginDTO } from 'src/models/loginDTO';
import { Account } from './account.entity';
import { accountService } from './account.service';


@Controller('api/user')
export class accountController {
    constructor(private userService: accountService) {}
  @Get()
  findAll(): Promise<Account[]> {
    return this.userService.findAll()
  }
  @Get('/one')
  findOne(@Body() id: number): Promise<Account> {
    return this.userService.findOne(id)
  }

  @Post()
  create(@Body() user: Account){
    this.userService.create(user)
    console.log('User Created')
  }
  @Post('/exist')
  async test(@Body() email: emailDTO): Promise<string>{
    return await this.userService.exist(email)
  }
  
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('/login')
  async login(@Body() loginDTO: loginDTO): Promise<Account>{
    return await this.userService.login(loginDTO)
  }
  
}