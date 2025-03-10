import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/modules/user/useCases/CreateUserUseCase/CreateUserUseCase';
import { CreateUserBody } from './dtos/userBody';
import { UserViewModel } from './viewModel/userViewModel';

@Controller('users')
export class UserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createPost(@Body() body: CreateUserBody) {
    const { name, email, password } = body;
    const user = await this.createUserUseCase.execute({
      name,
      email,
      password,
    });
    return UserViewModel.toHtpp(user);
  }
}
