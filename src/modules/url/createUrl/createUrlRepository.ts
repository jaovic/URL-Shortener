import prisma from "../../../database/client";

class CreateUrlRepositoy {
  async saveUrl(data: { url: string }) {
    await prisma.url.create({
      data: {
        url: data.url,
      },
    });
  }
}
export { CreateUrlRepositoy };
