import { Test, TestingModule } from '@nestjs/testing';
import { TextMessagesController } from './text-messages.controller';

describe('TextMessagesController', () => {
  let controller: TextMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextMessagesController],
    }).compile();

    controller = module.get<TextMessagesController>(TextMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
