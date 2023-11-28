import { Controller, Get, Query } from '@nestjs/common';
import { StorageService } from './storage.service';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('storage')
export class StorageController {
  constructor(private service: StorageService) {}

  @Get('fruits')
  @ApiResponse({ status: 200, description: 'Storage Fruit' })
  @ApiOperation({ summary: 'Storage fruit list' })
  @ApiQuery({
    name: 'model',
    type: Boolean,
    description: 'A parameter optional',
    required: false,
  })
  findAll(@Query('model') model: boolean) {
    return this.service.findAll(model);
  }
}
