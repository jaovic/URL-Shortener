import { CreateUrlRepositoy } from "./createUrlRepository";

type UrlService = {
  url: string;
};

class CreateUrlService {
  constructor(private createUrlRpository: CreateUrlRepositoy) {}

  async create(url: UrlService) {
    const saveUrl = await this.createUrlRpository.saveUrl(url);
    return saveUrl;
  }
}

export { CreateUrlService };
