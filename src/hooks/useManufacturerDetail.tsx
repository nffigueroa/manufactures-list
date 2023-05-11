import React from 'react';
import { ModelNames } from '../interfaces/manufacturer';
import { getModelNameByBrand } from '../services';
export const useManufacturerDetails = () => {
  const [manufacturerId, setManufacturerId] = React.useState<string>('');
  const [modelNames, setModelNames] = React.useState<ModelNames[]>([]);

  React.useEffect(() => {
    if (manufacturerId) {
      (async () => {
        try {
          const detailsResponse: ModelNames[] = await getModelNameByBrand(
            manufacturerId
          );
          setModelNames(detailsResponse);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [manufacturerId]);
  return { setManufacturerId, modelNames, manufacturerId };
};
