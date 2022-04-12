import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  // dont need to import prisma again, since it is globally imported
  constructor(private prisma: PrismaService) {}
  signin() {
    // return the saved user
    return { msg: 'i have signed in' };
  }

  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);

    // save the user to the database
    const user = this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });

    return user;
  }
}
