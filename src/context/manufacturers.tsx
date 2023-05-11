import React, { Dispatch, SetStateAction } from 'react';
import {
  ManufacturerBody,
  ManufacturerDetail,
} from '../interfaces/manufacturer';

interface ManufacturerContext {
  currentPage: number;
  manufacturers: ManufacturerBody[];
  manufacturerDetail: ManufacturerDetail;
  setManufacturers: Dispatch<SetStateAction<ManufacturerBody[]>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  setMfDetails: Dispatch<SetStateAction<ManufacturerDetail>>;
  setRedirectTo: Dispatch<SetStateAction<string>>;
  redirectTo: string;
}

export const ManufacturerContext = React.createContext<ManufacturerContext>({
  currentPage: 1,
  manufacturers: [],
  manufacturerDetail: {} as ManufacturerDetail,
  setManufacturers: () => {},
  setCurrentPage: () => {},
  setMfDetails: () => {},
  redirectTo: '',
  setRedirectTo: () => {},
});

export const ManufacturersProvider = ({ children }: any) => {
  const [redirectTo, setRedirectTo] = React.useState('');
  const [manufacturerDetail, setMfDetails] = React.useState<ManufacturerDetail>(
    {} as ManufacturerDetail
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [manufacturers, setManufacturers] = React.useState<ManufacturerBody[]>(
    []
  );
  return (
    <ManufacturerContext.Provider
      value={{
        currentPage,
        manufacturers,
        manufacturerDetail,
        setCurrentPage,
        setManufacturers,
        redirectTo,
        setMfDetails,
        setRedirectTo,
      }}
    >
      {children}
    </ManufacturerContext.Provider>
  );
};
