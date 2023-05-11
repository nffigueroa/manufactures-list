import { HOST } from '../const';
import { ManufacturerBody } from '../interfaces/manufacturer';

const GET_ALL_MANUFACTURES = 'api/vehicles/getallmanufacturers';

export const getManufactures = async (
  page: number
): Promise<ManufacturerBody[]> => {
  const response = await fetch(
    `${HOST}/${GET_ALL_MANUFACTURES}?format=json&page=${page}`
  );
  const { Results } = await response.json();
  return Results as ManufacturerBody[];
};
