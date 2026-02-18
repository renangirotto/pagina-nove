import { z } from "zod";

export const LabelSchema = z.enum(["Quadrinho", "Manga"]);

export const PublishersSchema = z.enum([
  "ComixZone",
  "Conrad",
  "DarkSide",
  "Escória Comix",
  "JBC",
  "Mino",
  "Mistifório",
  "Monstra",
  "MPEG",
  "Panini",
  "Pé-de-Cabra",
  "Pipoca & Nanquim",
  "Suma",
  "Veneta",
  "Yes Cabrita",
]);

export const RatingSchema = z.enum([
  "1",
  "1.5",
  "2",
  "2.5",
  "3",
  "3.5",
  "4",
  "4.5",
  "5",
]);
