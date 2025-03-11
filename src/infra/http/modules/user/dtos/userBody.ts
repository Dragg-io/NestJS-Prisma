import { IsEmail, IsNotEmpty, isNotEmpty, IsString } from 'class-validator';

//TODO: Essa classe inteira serve pra validar os dados? O que exatamente é DTO?
export class CreateUserBody {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
