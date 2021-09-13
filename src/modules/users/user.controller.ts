import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { MailService } from 'src/mail/mail.service';
import { NoAuth } from '../auth/guards/no-auth.guard';
import { CreateUserDto } from './dto/createUser.dto';
import { FogotPaasswordDto } from './dto/forgot-password.dto';
import { UserService } from './user.service';

@ApiTags('User')
@ApiBearerAuth()
@Controller('api/users')
export class UserController {
  constructor(private readonly usersService: UserService
    
    ) {}

  @NoAuth()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.usersService.showById(+id);
  }
}
