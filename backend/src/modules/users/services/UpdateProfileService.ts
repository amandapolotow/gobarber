import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';

import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import AppError from '@shared/errors/AppError';

interface IRequest{
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
class UpdateProfileService{
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('StorageHashProviderProvider')
    private hashProvider: IHashProvider,
    ) {}

  public async execute({ user_id, name, email, password, old_password }: IRequest): Promise<User>{
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    const userUpdatedEmail = await this.usersRepository.findByEmail(email);

    if (userUpdatedEmail && userUpdatedEmail.id !== user_id) {
      throw new AppError('This email is already been used.');
    }

    if (password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(
        old_password,
        user.password,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.');
      }
    }

    if (password && !old_password) {
      throw new AppError('You need to inform our current password.');
    }

    user.name = name;
    user.email = email;

    if (password) {
      user.password = await this.hashProvider.generateHash(password)
    }

    return this.usersRepository.save(user);
  }
}

export default UpdateProfileService;
