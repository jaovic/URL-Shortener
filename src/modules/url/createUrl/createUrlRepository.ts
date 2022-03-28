import prisma from "../../../database/client";

class CreateUrlRepositoy {
  async saveUrl(url: string) {
    await prisma.url.create({
      data: {
        url: url,
      },
    });
  }
}
export { CreateUrlRepositoy };
