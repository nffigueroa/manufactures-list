import React from 'react';
import { ManufacturerBody } from '../interfaces/manufacturer';
import { getManufactures } from '../services';
import { ManufacturerContext } from '../context/manufacturers';

export const useManufactures = () => {
  const { currentPage } = React.useContext(ManufacturerContext);
  const [manufacturers, setManufacturers] = React.useState<ManufacturerBody[]>(
    []
  );

  React.useEffect(() => {
    console.log(currentPage);

    if (!currentPage) {
      return;
    }
    (async () => {
      try {
        const manufacturersResponse: ManufacturerBody[] = await getManufactures(
          currentPage
        );
        setManufacturers([...manufacturers, ...manufacturersResponse]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [currentPage]);

  return { manufacturers };
};
