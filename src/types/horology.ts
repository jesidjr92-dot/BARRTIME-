export type WatchCategory =
  | 'Todos'
  | 'Cronógrafos'
  | 'Grandes Complicaciones'
  | 'Esfera Minimalista'
  | 'Buceo Técnico';

export interface StrapOption {
  id: string;
  name: string;
  material: string;
  priceDelta: number;
}

export interface Timepiece {
  id: string;
  reference: string;
  collection: string;
  name: string;
  category: Exclude<WatchCategory, 'Todos'>;
  priceEur: number;
  image: string;
  aspectRatio: '1:1' | '4:3';
  availability: 'Disponible' | 'Edición Numerada' | 'Bajo Asignación';
  editionNote: string;
  description: string;
  specs: {
    diameter: string;
    thickness: string;
    caliber: string;
    powerReserve: string;
    powerReserveHours: number;
    frequency: string;
    caseMaterial: string;
    crystal: string;
    waterResistance: string;
    jewels: number;
  };
  availableStraps: StrapOption[];
  isFlagship?: boolean;
}

export interface CaliberArchitecture {
  id: string;
  code: string;
  title: string;
  type: string;
  summary: string;
  frequencyHz: string;
  frequencyVph: string;
  powerReserve: string;
  jewels: number;
  components: number;
  precisionTolerance: string;
  finishing: string[];
  balanceWheelSpeedMs: number;
}

export interface CartItem {
  cartKey: string;
  watchId: string;
  strapId: string;
  engraving: string;
  quantity: number;
}

export interface OrderReceipt {
  orderNumber: string;
  createdAt: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  deliveryMethod: 'armored' | 'boutique';
  destination: string;
  items: Array<{
    reference: string;
    name: string;
    strapName: string;
    engraving: string;
    quantity: number;
    unitPriceEur: number;
  }>;
  subtotalEur: number;
  shippingEur: number;
  totalEur: number;
}

export interface AppointmentConfirmation {
  bookingCode: string;
  salon: string;
  date: string;
  time: string;
  clientName: string;
  watchReference: string;
}
