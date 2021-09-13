import { CreateUserDto } from "src/modules/users/dto/createUser.dto";
import { MailService } from "../mail.service";
import { ConfirmationTemplate } from "../templates/confirmation";
export class UserConfirmation extends MailService{
   async userConfirmationEmail(userDto:CreateUserDto,id:number) {
        const subject='Welcome to eProcurement App! Confirm your Email';
        const htmlToSend= ConfirmationTemplate(userDto,id)
        super.sendMail(userDto,subject,htmlToSend)

    }
}