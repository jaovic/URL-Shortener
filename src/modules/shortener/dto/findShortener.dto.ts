import { IsNotEmpty, IsString } from 'class-validator';

const MessagesHelper = {
  CODE_NOT_EMPTY: 'code is required',
  CODE_STRING: 'code must be string',
};

export class FindShortenerDto {
  @IsNotEmpty({ message: MessagesHelper.CODE_NOT_EMPTY })
  @IsString({ message: MessagesHelper.CODE_STRING })
  code: string;
}
