import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { Image } from './image.entity';
import { ApiTags } from '@nestjs/swagger';
import { AddImagePayload } from './payload/add.image.payload';
import { UpdateImagePayload } from './payload/update.image.payload';

@Controller('/api/image')
@ApiTags('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get(':id')
  getImageById(@Param('id') id: string): Promise<Image> {
    return this.imageService.getImageById(+id);
  }

  @Post()
  addImage(@Query() payload: AddImagePayload) {
    return this.imageService.createImage(payload);
  }

  @Put()
  updateImage(@Query() payload: UpdateImagePayload) {
    return this.imageService.updateImage(payload);
  }

  @Delete(':id')
  deleteImage(@Param('id') id: string) {
    return this.imageService.deleteImage(+id);
  }
}
