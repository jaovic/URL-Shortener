-- CreateTable
CREATE TABLE "url" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shortener" (
    "id" TEXT NOT NULL,
    "url_id" VARCHAR(255) NOT NULL,
    "code" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "shortener_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "shortener" ADD CONSTRAINT "shortener_url_id_fkey" FOREIGN KEY ("url_id") REFERENCES "url"("id") ON DELETE CASCADE ON UPDATE CASCADE;
