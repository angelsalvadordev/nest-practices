import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;
}

export class UpdateCarDto {
  @IsString()
  @IsOptional()
  readonly brand: string;

  @IsString()
  @IsOptional()
  readonly model: string;
}
