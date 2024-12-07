import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty({
    description: "Customer's full name",
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: "Customer's CPF",
    example: '123.456.789-10',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{3}(\.\d{3}){2}-\d{2}$|^\d{11}$/, {
    message:
      'CPF must have 11 digits and be in the following formats: 12345678910 or 123.456.789-10',
  })
  cpf: string;

  @ApiProperty({
    description: "Customer's date of birth",
    example: '1994-01-01',
  })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  birthDate: Date;

  @ApiProperty({
    description: "Customer's e-mail",
    example: 'john@mail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "Customer's phone number",
    example: '11123456789',
  })
  @IsNotEmpty()
  @MinLength(10)
  @MaxLength(11)
  phone: string;
}
