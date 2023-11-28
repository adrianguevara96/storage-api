import { IsString, IsNotEmpty, IsUUID, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Property } from 'src/decorators/property.decorator';

export class FruitStorage {
  @Property()
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({ description: 'id' })
  readonly id: string;

  @Property()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'type' })
  readonly type: string;

  @Property()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'quantity' })
  readonly quantity: string;

  @Property()
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'date' })
  readonly date: Date;
}
