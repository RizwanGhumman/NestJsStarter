import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { MailService } from 'src/mail/mail.service';
import { UserConfirmation } from 'src/mail/user/user-confirmation';
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService,MailService,UserConfirmation]
})
export class UsersModule {}
