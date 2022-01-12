import { Test } from '@nestjs/testing';
import { ImageService } from './image.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Image } from './image.entity';

describe('The AuthenticationService', () => {
  let imageService: ImageService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ImageService,
        {
          provide: getRepositoryToken(Image),
          useValue: {},
        },
      ],
    }).compile();
    imageService = await module.get(ImageService);
  });
  describe('capitalize', () => {
    it('should return a capitalize string', async () => {
      const enter = 'test';
      const result = 'TEST';
      expect(imageService.capitalize(enter)).toBe(result);
    });
  });
});
