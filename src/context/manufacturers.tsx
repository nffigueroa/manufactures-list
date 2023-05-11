import React, { Dispatch, SetStateAction } from 'react';
import {
  ManufacturerBody,
  ManufacturerDetail,
} from '../interfaces/manufacturer';
import { useManufacturerDetails } from '../hooks';

interface ManufacturerContext {
  currentPage: number;
  manufacturers: ManufacturerBody[];
  manufacturersForTable: Record<string, any>[];
  manufacturerDetail: ManufacturerDetail;
  setManufacturers: Dispatch<SetStateAction<ManufacturerBody[]>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  redirectTo: string;
}

export const ManufacturerContext = React.createContext<ManufacturerContext>({
  currentPage: 1,
  manufacturers: [],
  manufacturerDetail: {} as ManufacturerDetail,
  manufacturersForTable: [],
  setManufacturers: () => {},
  setCurrentPage: () => {},
  redirectTo: '',
});

export const ManufacturersProvider = ({ children }: any) => {
  const [redirectTo, setRedirectTo] = React.useState('');
  const [mfDetails, setMfDetails] = React.useState<ManufacturerDetail>(
    {} as ManufacturerDetail
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [manufacturers, setManufacturers] = React.useState<ManufacturerBody[]>(
    []
  );
  const [manufacturersForTable, setManufacturersForTable] = React.useState<
    Record<string, string>[]
  >([]);
  const { setManufacturerId, modelNames, manufacturerId } =
    useManufacturerDetails();

  const handleSeeDetailsClick = (mfName: string) => {
    setManufacturerId(mfName);
    setRedirectTo('/details');
  };

  React.useEffect(() => {
    const details: ManufacturerDetail = {
      models: modelNames,
      ...{
        ...(manufacturers.find(
          (item) => item.Mfr_ID === manufacturerId
        ) as ManufacturerBody),
      },
    };
    setMfDetails(details);
  }, [modelNames]);
  React.useEffect(() => {
    const manufacturersFormatted = manufacturers.map(
      ({ Country, Mfr_Name, Mfr_ID }) => ({
        id: Mfr_ID,
        commonName: Mfr_Name,
        country: Country,
        details: (
          <>
            <a onClick={() => handleSeeDetailsClick(Mfr_ID)}>Details</a>
          </>
        ),
      })
    );
    setManufacturersForTable([
      ...manufacturersForTable,
      ...(manufacturersFormatted as Record<string, any>[]),
    ]);
  }, [manufacturers]);
  return (
    <ManufacturerContext.Provider
      value={{
        manufacturersForTable,
        currentPage,
        manufacturers,
        manufacturerDetail: mfDetails,
        setCurrentPage,
        setManufacturers,
        redirectTo,
      }}
    >
      {children}
    </ManufacturerContext.Provider>
  );
};
