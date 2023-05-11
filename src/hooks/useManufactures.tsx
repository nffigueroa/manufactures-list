import React from 'react';
import { ManufacturerBody } from '../interfaces/manufacturer';
import { getManufactures } from '../services';
import { ManufacturerContext } from '../context/manufacturers';

export const useManufactures = () => {
  let pagesStored = {};
  const { currentPage, setManufacturers } =
    React.useContext(ManufacturerContext);

  React.useEffect(() => {
    if (
      !currentPage ||
      Object.keys(pagesStored).includes(String(currentPage))
    ) {
      return;
    }
    pagesStored = { ...pagesStored, [currentPage]: currentPage };

    (async () => {
      try {
        const manufacturersResponse: ManufacturerBody[] = await getManufactures(
          currentPage
        );
        setManufacturers(manufacturersResponse);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [currentPage]);
};
