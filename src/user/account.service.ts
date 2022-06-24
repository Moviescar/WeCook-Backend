import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { emailDTO } from "src/models/emailDTO";
import { loginDTO } from "src/models/loginDTO";
import { Repository } from 'typeorm'
import { Account } from './account.entity'

@Injectable()
export class accountService {
    constructor(
        @InjectRepository(Account)
        private userRepository: Repository<Account>
    ){}

    findAll(): Promise<Account[]> {
        return this.userRepository.find()
    }

    findOne(id: number): Promise<Account>{
        return this.userRepository.findOneById(id)
    }

    create(account: Account) {
        this.userRepository.save(account)
    }

    async exist(email: emailDTO){
        var exist = await this.userRepository.query("SELECT email FROM account WHERE account.email = '" + email.email + "'")
        console.log(exist)
        if(exist.length > 0){
            return 'true'
        }else{
            return 'false'
        }
    }

    async login(loginDTO: loginDTO): Promise<Account>{
        var account = await this.userRepository.query("SELECT * FROM account WHERE account.email = '" + loginDTO.email + "' AND account.password = '"+ loginDTO.password +"'")
        account = account[0]
        return account
    }
    
}