import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user/user.module';
import { DatabaseModule } from './infra/database/database.module';

// ainda não entendo direito o conceito de decorators
//TODO: Estudar decorators
@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
// Por que retornar uma classe vazia? Talvez os decorators insiram o restante...
export class AppModule {}
