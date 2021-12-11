import { v4 as uuid } from 'uuid';

export class User {
  id: string;

  name: string;

  login: string;

  password: string | undefined;

  constructor(name: string, login: string, password: string) {
    this.id = uuid();
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

