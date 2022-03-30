import { CreateUrlRepositoy } from "./createUrlRepository";

class CreateUrlService {
  constructor(private createUrlRpository: CreateUrlRepositoy) {}

  async create(url: string) {
    const saveUrl = await this.createUrlRpository.saveUrl(url);
    return saveUrl;
  }
  async createShortUrl() {
    console.log("teste Service");
    const shortUrl = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5);
    console.log(shortUrl);
    await this.createUrlRpository.saveShortUrl(shortUrl);
    return shortUrl;
  }
}

export { CreateUrlService };
