import { z } from "zod";

export const ComicCollectionsSchema = z
  .enum([
    "20th Century Boys - Edição Definitiva",
    "Absolute Batman",
    "Absolute Mulher-Maravilha",
    "Absolute Superman",
    "Beasts of Burden",
    "Dead Dead Demon's Dededede Destruction",
    "Gash Bell",
    "Hajime no Ippo",
    "Hellboy Omnibus",
    "Invencível",
    "Jojo's Bizarre Adventure: Phantom Blood",
    "Mad Marx",
    "Os Ogros Deuses",
    "Pluto: Edição de Luxo",
    "Shin Zero",
  ])
  .optional();

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
  "Mythos",
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
