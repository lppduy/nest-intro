import { IsEmail, isEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(96)
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(96)
  lastName?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message: 'Minimum 8 characters, at least one letter, one number and one special character' // example: Abc123!@
  })
  password: string;
}