import { User } from 'src/modules/user/entities/User';
import { User as UserRaw } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma({ email, name, password, id, createdAt }: User): UserRaw {
    return {
      email,
      name,
      password,
      id,
      createdAt,
    };
  }
}
