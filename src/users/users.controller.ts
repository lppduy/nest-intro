import { Body, Controller, DefaultValuePipe, Get, Headers, Ip, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { GetUsersParamDTO } from './dtos/get-users-param.dto';
import { PatchUserDTO } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {

  @Get('/:id?')
  public getUsers(
    @Param() getUsersParamDTO: GetUsersParamDTO,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
  ): string {
    console.log(getUsersParamDTO);
    return 'This will return all the users';
  };

  @Post()
  public createUsers(
    @Body() createUserDTO: CreateUserDTO,
  ): string {
    console.log(createUserDTO)
    return 'This will create a new user';
  }

  @Patch()
  public patchUser(@Body() patchUserDTO: PatchUserDTO): PatchUserDTO {
    return patchUserDTO;
  }
}
