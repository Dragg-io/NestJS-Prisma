import { CreateUserUseCase } from 'src/modules/user/useCases/CreateUserUseCase/CreateUserUseCase';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [CreateUserUseCase],
})
export class UserModule {}
