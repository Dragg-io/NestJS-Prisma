import { User } from 'src/modules/user/entities/User';

export class UserViewModel {
  static toHtpp({ createdAt, email, name, id }: User) {
    return {
      id,
      name,
      email,
      createdAt,
    };
  }
}
