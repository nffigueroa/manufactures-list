export interface ManufacturerBody {
  Mfr_ID: string;
  Mfr_Name: string;
  VehicleTypes: VehiclesType[];
  Country: string;
  modelNames: ModelNames[];
}

export interface VehiclesType {
  IsPrimary: boolean;
  Name: string;
}

export interface ModelNames {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export type ManufacturerDetail = { models: ModelNames[] } & ManufacturerBody;
