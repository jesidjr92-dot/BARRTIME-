import { CaliberArchitecture, StrapOption, Timepiece } from '../types/horology';

export const STRAP_OPTIONS: Record<string, StrapOption> = {
  fkm_carbon: {
    id: 'fkm_carbon',
    name: 'Caucho Técnico Negro Mate',
    material: 'Elastómero vulcanizado con cierre desplegable en titanio',
    priceDelta: 0,
  },
  titanium_g5: {
    id: 'titanium_g5',
    name: 'Brazalete Titanio Grado 5',
    material: 'Eslabones macizos cepillados con microajuste de 4 mm',
    priceDelta: 1450,
  },
  steel_904l: {
    id: 'steel_904l',
    name: 'Brazalete Integrado 904L',
    material: 'Acero quirúrgico cepillado a mano con biselado pulido',
    priceDelta: 0,
  },
  alligator_anthracite: {
    id: 'alligator_anthracite',
    name: 'Piel Mate Antracita',
    material: 'Piel cosida a mano con forro de becerro hidrófugo',
    priceDelta: 680,
  },
  forged_link: {
    id: 'forged_link',
    name: 'Brazalete Titanio y Tornillos Oscuros',
    material: 'Arquitectura técnica articulada con tornillería visible',
    priceDelta: 950,
  },
};

export const TIMEPIECES: Timepiece[] = [
  {
    id: 'bt-01',
    reference: 'REF. BT-01.TI',
    collection: 'Cronómetro Negro',
    name: 'Cronómetro Negro Calibre 901',
    category: 'Cronógrafos',
    priceEur: 18400,
    image: '/src/assets/images/hero_horology_flagship_1795474645218.jpg',
    aspectRatio: '4:3',
    availability: 'Edición Numerada',
    editionNote: 'Serie limitada a 150 piezas anuales',
    isFlagship: true,
    description:
      'Nuestra arquitectura de cronógrafo integrada en titanio Grado 5 y bisel cerámico micrograbado. Esfera antracita satinada vertical con contadores de décima de segundo y cristal de zafiro con doble tratamiento antirreflejos.',
    specs: {
      diameter: '41.0 mm',
      thickness: '11.4 mm',
      caliber: 'BT-901 Automático',
      powerReserve: '72 h',
      powerReserveHours: 72,
      frequency: '36,000 alt/h (5 Hz)',
      caseMaterial: 'Titanio Grado 5 y Cerámica Negra',
      crystal: 'Zafiro abombado antirreflejos',
      waterResistance: '100 m / 10 bar',
      jewels: 35,
    },
    availableStraps: [
      STRAP_OPTIONS.fkm_carbon,
      STRAP_OPTIONS.titanium_g5,
      STRAP_OPTIONS.alligator_anthracite,
    ],
  },
  {
    id: 'bt-02',
    reference: 'REF. BT-02.ST',
    collection: 'Línea Arquitectura',
    name: 'Cronógrafo Acero 904L',
    category: 'Cronógrafos',
    priceEur: 14900,
    image: '/src/assets/images/watch_chronograph_steel_1795474645685.jpg',
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Entrega asegurada en 48 h',
    description:
      'Cronógrafo de rueda de pilares con brazalete integrado en acero 904L. El contraste entre la esfera negro obsidiana mate y las subesferas grabadas garantiza una lectura inmediata bajo cualquier ángulo lumínico.',
    specs: {
      diameter: '40.5 mm',
      thickness: '11.8 mm',
      caliber: 'BT-901S Rueda de Pilares',
      powerReserve: '68 h',
      powerReserveHours: 68,
      frequency: '28,800 alt/h (4 Hz)',
      caseMaterial: 'Acero Inoxidable 904L Cepillado',
      crystal: 'Zafiro plano doble antirreflejos',
      waterResistance: '100 m / 10 bar',
      jewels: 33,
    },
    availableStraps: [
      STRAP_OPTIONS.steel_904l,
      STRAP_OPTIONS.fkm_carbon,
      STRAP_OPTIONS.alligator_anthracite,
    ],
  },
  {
    id: 'bt-03',
    reference: 'REF. BT-03.TB',
    collection: 'Alta Complicación',
    name: 'Torbellino Esqueleto G5',
    category: 'Grandes Complicaciones',
    priceEur: 46800,
    image: '/src/assets/images/watch_tourbillon_titanium_1795474646347.jpg',
    aspectRatio: '1:1',
    availability: 'Bajo Asignación',
    editionNote: 'Producción artesanal de 24 piezas al año',
    description:
      'Jaula de torbellino volante de 0.42 gramos suspendida a las 6 horas entre puentes de titanio microarenados con acabado oscuro. Cada ángulo interior está biselado manualmente en nuestro taller de Ginebra.',
    specs: {
      diameter: '41.5 mm',
      thickness: '10.2 mm',
      caliber: 'BT-740 Torbellino Volante',
      powerReserve: '96 h',
      powerReserveHours: 96,
      frequency: '21,600 alt/h (3 Hz)',
      caseMaterial: 'Titanio Grado 5 Microarenado',
      crystal: 'Zafiro técnico caja y fondo',
      waterResistance: '50 m / 5 bar',
      jewels: 29,
    },
    availableStraps: [
      STRAP_OPTIONS.fkm_carbon,
      STRAP_OPTIONS.titanium_g5,
      STRAP_OPTIONS.alligator_anthracite,
    ],
  },
  {
    id: 'bt-04',
    reference: 'REF. BT-04.PT',
    collection: 'Soberana',
    name: 'Extrafino Platino 950',
    category: 'Esfera Minimalista',
    priceEur: 22600,
    image: '/src/assets/images/watch_minimal_dress_1795474646681.jpg',
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Microrrotor en platino macizo',
    description:
      'La expresión más pura de la elegancia contenida. Caja de 6.1 mm de grosor mecanizada en platino 950 con esfera ahumada gris pizarra rayos de sol e índices bastón facetados a diamante.',
    specs: {
      diameter: '38.5 mm',
      thickness: '6.1 mm',
      caliber: 'BT-312 Microrrotor',
      powerReserve: '62 h',
      powerReserveHours: 62,
      frequency: '28,800 alt/h (4 Hz)',
      caseMaterial: 'Platino 950 Pulido y Satinado',
      crystal: 'Zafiro ultraclaro',
      waterResistance: '30 m / 3 bar',
      jewels: 31,
    },
    availableStraps: [
      STRAP_OPTIONS.alligator_anthracite,
      STRAP_OPTIONS.fkm_carbon,
    ],
  },
  {
    id: 'bt-05',
    reference: 'REF. BT-05.CB',
    collection: 'Horizontes Profundos',
    name: 'Abismo Carbono Forjado 300M',
    category: 'Buceo Técnico',
    priceEur: 16200,
    image: '/src/assets/images/watch_diver_ceramic_1795474647523.jpg',
    aspectRatio: '1:1',
    availability: 'Disponible',
    editionNote: 'Certificación de inmersión profesional',
    description:
      'Caja monocasco de carbono forjado de alta densidad con bisel unidireccional cerámico de 120 clics e índices con pigmento luminiscente de emisión fría para legibilidad abisal.',
    specs: {
      diameter: '42.0 mm',
      thickness: '12.6 mm',
      caliber: 'BT-520 Antimagnético',
      powerReserve: '70 h',
      powerReserveHours: 70,
      frequency: '28,800 alt/h (4 Hz)',
      caseMaterial: 'Carbono Forjado y Titanio G5',
      crystal: 'Zafiro 3.2 mm biselado',
      waterResistance: '300 m / 30 bar',
      jewels: 28,
    },
    availableStraps: [
      STRAP_OPTIONS.forged_link,
      STRAP_OPTIONS.fkm_carbon,
    ],
  },
];

export const CALIBERS: CaliberArchitecture[] = [
  {
    id: 'bt-901',
    code: 'Calibre BT-901',
    title: 'Cronógrafo de Alta Frecuencia',
    type: 'Automático integrado · Rueda de pilares',
    summary:
      'Diseñado para medir intervalos con resolución de décima de segundo sin pérdida de amplitud gracias a su doble barrilete coaxial y embrague horizontal optimizado.',
    frequencyHz: '5.0 Hz',
    frequencyVph: '36,000 alt/h',
    powerReserve: '72 horas',
    jewels: 35,
    components: 312,
    precisionTolerance: '-1 / +2 s/día',
    finishing: [
      'Puentes en rutenio oscuro con cepillado lineal suizo',
      'Rueda de pilares pulida a espejo y tornillos azulados al carbono',
      'Masa oscilante calada en tungsteno de alta inercia',
    ],
    balanceWheelSpeedMs: 1600,
  },
  {
    id: 'bt-740',
    code: 'Calibre BT-740',
    title: 'Torbellino Volante Monopuente',
    type: 'Cuerda manual · Doble barrilete en serie',
    summary:
      'Arquitectura abierta que elimina el puente superior del torbellino, logrando una profundidad tridimensional excepcional con jaula en titanio de grado aeroespacial.',
    frequencyHz: '3.0 Hz',
    frequencyVph: '21,600 alt/h',
    powerReserve: '96 horas',
    jewels: 29,
    components: 264,
    precisionTolerance: '-1 / +1.5 s/día',
    finishing: [
      '42 ángulos entrantes biselados a mano con madera de genciana',
      'Jaula de torbellino equilibrada dinámicamente (0.42 g)',
      'Espiral libre con cuatro tornillos de ajuste en oro blanco',
    ],
    balanceWheelSpeedMs: 2400,
  },
  {
    id: 'bt-312',
    code: 'Calibre BT-312',
    title: 'Microrrotor Extrafino',
    type: 'Automático planar · Perfil 2.85 mm',
    summary:
      'El tren de rodaje y el microrrotor de platino 950 comparten el mismo plano arquitectónico para reducir el espesor total del movimiento a menos de tres milímetros.',
    frequencyHz: '4.0 Hz',
    frequencyVph: '28,800 alt/h',
    powerReserve: '62 horas',
    jewels: 31,
    components: 198,
    precisionTolerance: '-2 / +2 s/día',
    finishing: [
      'Microrrotor en platino 950 macizo sobre rodamiento cerámico',
      'Franjas de Ginebra radiales en acabado gris antracita',
      'Puente de volante transversal sujeto por dos puntos',
    ],
    balanceWheelSpeedMs: 2000,
  },
];

export const ATELIER_SALONS = [
  { id: 'geneve', label: 'Ginebra — Calle del Ródano 42', city: 'Ginebra' },
  { id: 'madrid', label: 'Madrid — Calle de José Ortega y Gasset 18', city: 'Madrid' },
  { id: 'cdmx', label: 'Ciudad de México — Av. Presidente Masaryk 410, Polanco', city: 'Ciudad de México' },
];

export const CONCIERGE_WHATSAPP_NUMBER = '41225550194';

export function formatEur(amount: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
