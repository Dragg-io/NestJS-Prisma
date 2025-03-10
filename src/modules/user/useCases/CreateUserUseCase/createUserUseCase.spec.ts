import { UserRepositoryInMemory } from '../../repositories/UserRepositoryInMemory';
import { CreateUserUseCase } from './CreateUserUseCase';
import { compare } from 'bcrypt';

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Create User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
  });

  it('Should be able to create a new user', async () => {
    expect(userRepositoryInMemory.users).toEqual([]);

    const user = await createUserUseCase.execute({
      email: 'lucaspedrodeveloper@gmail.com',
      password: '05195040',
      name: 'Draggio',
    });

    expect(userRepositoryInMemory.users).toEqual([user]);
  });

  it('Should be able to create a user with password encrypted', async () => {
    const userPasswordWithoutEncrypt = '05195040';

    const user = await createUserUseCase.execute({
      email: 'lucaspedrodeveloper@gmail.com',
      password: userPasswordWithoutEncrypt,
      name: 'Draggio',
    });

    const userHasPasswordEncrypted = await compare(
      userPasswordWithoutEncrypt,
      user.password,
    );

    expect(userHasPasswordEncrypted).toBeTruthy();
  });
});
