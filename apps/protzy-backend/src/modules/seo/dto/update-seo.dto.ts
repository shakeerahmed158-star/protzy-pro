export class UpdateSeoDto {
  title?: string;

  description?: string;

  keywords?: string[];

  canonicalUrl?: string;

  ogImage?: string;

  robots?: string;

  active?: boolean;
}