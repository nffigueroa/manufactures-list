import React from 'react';
import { ManufacturerContext } from '../context/manufacturers';
import { useManufactures } from '../hooks';
import TableComponent from '../components/Table/Table';
import { TableHeader } from '../components/Table/const';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const {
    currentPage,
    setCurrentPage,
    setManufacturers,
    manufacturersForTable,
    redirectTo,
  } = React.useContext(ManufacturerContext);
  const { manufacturers } = useManufactures();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!redirectTo) {
      return;
    }
    navigate(redirectTo);
  }, [redirectTo]);
  React.useEffect(() => {
    if (!manufacturers.length) {
      return;
    }
    setManufacturers(manufacturers);
  }, [manufacturers]);
  return (
    <>
      <TableComponent
        tableBody={manufacturersForTable}
        tableHeader={TableHeader}
      />
      <div
        style={{
          border: '1px solid black',
          borderRadius: '4px',
          position: 'fixed',
          left: '100px',
          bottom: '100px',
          padding: '8px',
        }}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        Load more...
      </div>
    </>
  );
};
