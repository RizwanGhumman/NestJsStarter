import { BadRequestException, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailService } from 'src/mail/mail.service';
import { UserConfirmation } from 'src/mail/user/user-confirmation';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { FogotPaasswordDto } from './dto/forgot-password.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private mailService:MailService,
    private userConfirmation:UserConfirmation
  ) {}
  async create(createUserDto: CreateUserDto) {
    //const token = Math.floor(1000 + Math.random() * 9000).toString();
    const user = User.create(createUserDto);
    await user.save();
    this.userConfirmation.userConfirmationEmail(createUserDto,user.id);
    return user;
  }

  async showById(id: number): Promise<User> {
    const user = await this.userRepo.findOne(id);

    delete user.password;
    return user;
  } 
  async upadteStatus(id):Promise<string>{
    const user = await this.showById(id);
    user.is_active=true;
    await this.userRepo.save(user);
    return "Congratulations you confirmed your email.Now you can login to our system";
    }

  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }
}
