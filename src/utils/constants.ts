export const PATH_IMG_COVERS = "/images/covers";

export const ROUTES = {
  buy: "/onde-comprar/",
  collections: "/colecoes/",
  home: "/",
  notes: "/notas/",
  readings: "/leituras/",
  readingsFirstPage: "/leituras/1/",
};

type NavChild = { href: string; label: string; target?: string };
type NavItem =
  | { href: string; label: string; target?: string; children?: never }
  | { href?: never; label: string; target?: never; children: NavChild[] };

export const NAV_ITEMS: NavItem[] = [
  {
    href: ROUTES.notes,
    label: "notas",
  },
  {
    label: "leituras",
    children: [
      { href: ROUTES.readingsFirstPage, label: "todas" },
      { href: ROUTES.collections, label: "coleções" },
    ],
  },
  {
    href: ROUTES.buy,
    label: "onde comprar",
  },
  {
    href: "https://www.instagram.com/napaginanove/",
    label: "@napaginanove",
    target: "_blank",
  },
];

export const TOTAL_AMOUNT_ON_SHELF = 238;
