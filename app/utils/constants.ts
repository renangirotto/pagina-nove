export const PATH_IMG_COVERS = '/images/covers';

export const ROUTES = {
  buy: '/onde-comprar',
  home: '/',
  notes: '/notas',
  readings: '/leituras'
};

export const NAV_ITEMS = [
  {
    icon: 'pen-tool',
    label: 'notas de leitura',
    to: ROUTES.notes
  },
  {
    icon: 'triangle-flag',
    label: 'leituras finalizadas',
    to: ROUTES.readings
  },
  {
    icon: 'shopping-bag',
    label: 'onde comprar',
    to: ROUTES.buy
  }
]
