import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable()
export class AuthService {
  signin() {
    return { msg: 'i have signed in' };
  }

  signup() {
    return { msg: 'i have signed up' };
  }
}
