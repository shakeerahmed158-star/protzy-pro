export class CreateContentDto {
  title: string;

  slug?: string;

  type: string;

  description?: string;

  content?: string;

  thumbnail?: string;

  banner?: string;

  tags?: string[];

  published?: boolean;
}