import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class MailService {
    constructor(private mailerService:MailerService,
    private config:ConfigService){}
    async sendMail(user,subject,htmlToSend){
        await this.mailerService.sendMail({
          to: user.email,
          from: `"No Reply" <${this.config.get('MAIL_FROM')}>`,// override default from
          subject: subject,
          html : htmlToSend
        });
      }
}
 