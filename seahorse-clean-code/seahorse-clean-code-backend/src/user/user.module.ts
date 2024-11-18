import { Controller, Get, Injectable } from "@nestjs/common";
import { Module } from '@nestjs/common';

interface User {
  name: string;
}

@Injectable()
export class UserService {
  getUsers(): User[] {
    return [{ name: 'Alice' }, { name: 'Bob' }];
  }
}

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): User[] {
    return this.userService.getUsers();
  }
}

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}