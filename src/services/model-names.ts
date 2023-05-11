import { HOST } from '../const';
import { ModelNames } from '../interfaces/manufacturer';

const GET_MODEL_NAME_BY_BRAND = 'api/vehicles/GetModelsForMakeId/';
export const getModelNameByBrand = async (
  brandId: string
): Promise<ModelNames[]> => {
  const response = await fetch(
    `${HOST}/${GET_MODEL_NAME_BY_BRAND}${brandId}?=json`
  );
  const { Results } = await response.json();
  return Results as ModelNames[];
};
