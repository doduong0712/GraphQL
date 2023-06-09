import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(email);

        if(user && user.password === password) { //TODO: make this more secure
            const {password, ...result} = user;
            return result;
        }
        console.log(user);
        
        return null;
    }

    async login(loginUserInput: LoginUserInput) {
        
        const user = await this.usersService.findOne(loginUserInput.email);
        const {password, ...result} = user;
        console.log("sss")
        return {
            access_token: 'jwt', // TODO: implement jwt
            user: result,
        }
    }
}
