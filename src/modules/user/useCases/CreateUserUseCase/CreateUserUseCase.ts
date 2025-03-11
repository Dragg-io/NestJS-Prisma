import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../entities/User';
import { hash } from 'bcrypt';

interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
}
// Isso permite que a classe "CreateUserUseCase" seja injetável
//TODO: Injeção de dependência, estudar
@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute({ email, password, name }: CreateUserRequest) {
    const user = new User({
      email,
      password: await hash(password, 10),
      name,
    });

    await this.userRepository.create(user);

    return user;
  }
}
