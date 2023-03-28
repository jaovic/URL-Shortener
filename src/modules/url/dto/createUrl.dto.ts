import { IsNotEmpty, IsString } from 'class-validator';

const MessagesHelper = {
  URL_NOT_EMPTY: 'url is required',
  URL_STRING: 'url must be string',
};

export class CreateUrlDto {
  @IsNotEmpty({ message: MessagesHelper.URL_NOT_EMPTY })
  @IsString({ message: MessagesHelper.URL_STRING })
  url: string;
}
