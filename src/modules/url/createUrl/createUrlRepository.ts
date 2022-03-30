import prisma from "../../../database/client";

class CreateUrlRepositoy {
  async saveUrl(url: string) {
    await prisma.url.create({
      data: {
        url: url,
      },
    });
  }
  async saveShortUrl(shortUrl: any) {
    await prisma.shortUrl.create({
      data: {
        shortUrl: shortUrl,
      },
    });
  }
}
export { CreateUrlRepositoy };
