import { CreateUrlRepositoy } from "./createUrlRepository";

class CreateUrlService {
  constructor(private createUrlRpository: CreateUrlRepositoy) {}

  async create(url: string) {
    const saveUrl = await this.createUrlRpository.saveUrl(url);
    return saveUrl;
  }
}

export { CreateUrlService };
