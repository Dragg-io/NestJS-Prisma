import { User } from '../entities/User';

//TODO: Abstract?????
export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
}
