export enum flavours {
  vanilla = 'Vanilla',
  chocolate = 'Chocolate',
  strawberry = 'Strawberry',
}

export type rowFormat = {
  name: string;
  age: number;
  birthDate: Date;
  isFromAlagoas: boolean;
  iceCreamFlavours: flavours;
  email: string;
  phoneNumber: string;
  windows: boolean;
  mac: boolean;
  linux: boolean;
};
