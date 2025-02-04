import { Type } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class GetUsersParamDTO {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  id?: number;
}