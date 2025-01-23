import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from "bcryptjs"

@Injectable()
export class AuthService {
  constructor(private  prisma:PrismaService){}
  async create(createAuthDto: CreateAuthDto) {
    const{name,email,password,matricNo,address}=createAuthDto
    try {
      // check if user exist 
      const user =await this.prisma.user.findUnique({
        where:{
          email:email
        }
      })
      if(user){
      throw new ConflictException("user already exist")
      }
      // how to generate matric number


      // create new user
      const newUser =await this.prisma.user.create({
        data:{
          name,
          email,
          password:await bcrypt.hash(password),
          address
        }
      })
      return newUser
    } catch (error) {
      throw new InternalServerErrorException(error ||"error in creating user")
    }
  
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
