import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}


  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  async findOne(email: string): Promise<User> {
    const user = await this.userModel.findOne({email: email}).exec();
    if(!user){
      throw new NotFoundException('User data not found!');
    }
    return user;
  }
  
  async findAll(): Promise<User[]> {
    const userData = await this.userModel.find().exec();
    if (!userData || userData.length == 0) {
      throw new NotFoundException('User data not found!');
  }
    return userData;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}



