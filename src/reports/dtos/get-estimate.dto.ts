import {
  IsString,
  IsNumber,
  Min,
  Max,
  IsLongitude,
  IsLatitude,
  IsOptional,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class GetEstimateDto {
  @IsString()
  make: string;

  @IsString()
  @IsOptional()
  model: string;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(2000000)
  mileage: number;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsLongitude()
  lng: number;

  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  @IsLatitude()
  lat: number;
}
