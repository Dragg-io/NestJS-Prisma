import { User } from '../entities/User';
import { UserRepository } from './UserRepository';

//TODO: Meu POO está enferrujado, estudar para entender o implements
export class UserRepositoryInMemory implements UserRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
}
