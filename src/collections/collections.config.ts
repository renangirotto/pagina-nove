import { z } from "zod";

export const publishers = z.enum([
  "ComixZone",
  "Conrad",
  "DarkSide Books",
  "Escória Comix",
  "Eu e Um Mano Produções",
  "JBC",
  "Mau Gosto corp.",
  "Mino",
  "Mistifório",
  "Monstra",
  "MPEG",
  "Mythos",
  "Panini",
  "Pé-de-Cabra",
  "Pipoca & Nanquim",
  "Publicação Independente",
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

export const series = z
  .enum([
    "20th Century Boys - Edição Definitiva",
    "Absolute Batman",
    "Absolute Caçador de Marte",
    "Absolute Lanterna Verde",
    "Absolute Mulher-Maravilha",
    "Absolute Superman",
    "Beasts of Burden",
    "Campeonato Sinistro de Binuca",
    "Dead Dead Demon's Dededede Destruction",
    "Gash Bell",
    "Hajime no Ippo",
    "Hellboy Omnibus",
    "Invencível",
    "Jojo's Bizarre Adventure: Phantom Blood",
    "Mad Marx",
    "Mutantes Shaolin",
    "O Segredo de Thunderley",
    "Os Ogros Deuses",
    "Pluto: Edição de Luxo",
    "Shin Zero",
    "Transformers - Universo Energon",
    "Vermillion",
  ])
  .optional();
