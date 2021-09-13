import { CreateUserDto } from "src/modules/users/dto/createUser.dto";

export function ConfirmationTemplate(userDto:CreateUserDto,id:number){
    return(
        `<html>
        <p>Hi ${userDto.name} </b> Please click below to confirm your email</p></b>
        <a href="${process.env.BASE_URL}/auth/confirmation/${id}">Confirm</a>
        </html>`
    )
}
