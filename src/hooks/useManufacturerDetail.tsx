import React from 'react';
import {
  ManufacturerBody,
  ManufacturerDetail,
  ModelNames,
} from '../interfaces/manufacturer';
import { getModelNameByBrand } from '../services';
import { ManufacturerContext } from '../context/manufacturers';
export const useManufacturerDetails = () => {
  const [manufacturerId, setManufacturerId] = React.useState<string>('');
  const { manufacturers, setMfDetails } = React.useContext(ManufacturerContext);

  React.useEffect(() => {
    if (manufacturerId) {
      (async () => {
        try {
          const detailsResponse: ModelNames[] = await getModelNameByBrand(
            manufacturerId
          );
          const details: ManufacturerDetail = {
            models: detailsResponse,
            ...{
              ...(manufacturers.find(
                (item) => String(item.Mfr_ID) === String(manufacturerId)
              ) as ManufacturerBody),
            },
          };
          setMfDetails(details);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [manufacturerId]);
  return { setManufacturerId, manufacturerId };
};
