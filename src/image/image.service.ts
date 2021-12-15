import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './image.entity';
import { Repository } from 'typeorm';
import { AddImagePayload } from './payload/add.image.payload';
import { UpdateImagePayload } from './payload/update.image.payload';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  getImageById(id: number): Promise<Image> {
    return this.imageRepository.findOne({
      where: { id: id },
    });
  }

  async createImage(payload: AddImagePayload): Promise<void> {
    const image: Image = new Image({
      link: payload.link,
    });

    await this.imageRepository.save(image);
  }

  async updateImage(payload: UpdateImagePayload): Promise<void> {
    const existImage = await this.getImageById(payload.id);

    if (existImage) {
      existImage.link = payload.link;

      await this.imageRepository.save(existImage);
    }
  }

  async deleteImage(id: number): Promise<void> {
    const existImage = await this.getImageById(id);
    if (existImage) {
      await this.imageRepository.delete(existImage);
    }
  }
}
