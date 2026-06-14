export class CreateCmsDto {
  title: string;

  slug: string;

  content: string;

  metaTitle?: string;

  metaDescription?: string;

  published?: boolean;
}