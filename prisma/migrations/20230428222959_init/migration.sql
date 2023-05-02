/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Registro" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "institucion" VARCHAR(255) NOT NULL,
    "cargo" VARCHAR(255) NOT NULL,
    "pais" VARCHAR(100) NOT NULL,
    "rol" VARCHAR(100) NOT NULL,
    "idioma" VARCHAR(100) NOT NULL,
    "topicos_sesion1" VARCHAR(100) NOT NULL,
    "otros_sesion1" VARCHAR(100) NOT NULL,
    "topicos_sesion2" VARCHAR(100) NOT NULL,
    "otros_sesion2" VARCHAR(100) NOT NULL,
    "topicos_sesion3" VARCHAR(100) NOT NULL,
    "otros_sesion3" VARCHAR(100) NOT NULL,
    "topicos_sesion4" VARCHAR(100) NOT NULL,
    "otros_sesion4" VARCHAR(100) NOT NULL,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("id")
);
