import React, { memo } from 'react';
import { ManufacturerContext } from '../context/manufacturers';
import { useManufactures } from '../hooks';
import TableComponent from '../components/Table/Table';
import { TableHeader } from '../components/Table/const';
import { useNavigate } from 'react-router-dom';

export const HomePage = memo(() => {
  const [manufacturersForTable, setManufacturersForTable] = React.useState<
    Record<string, string>[]
  >([]);
  const { currentPage, setCurrentPage, manufacturers } =
    React.useContext(ManufacturerContext);

  useManufactures();
  const navigate = useNavigate();

  const handleSeeDetailsClick = (mfId: string) => {
    navigate(`/details`, {
      state: {
        mfId,
      },
    });
  };

  React.useEffect(() => {
    const manufacturersFormatted = manufacturers.map(
      ({ Country, Mfr_Name, Mfr_ID }) => ({
        id: Mfr_ID,
        commonName: Mfr_Name,
        country: Country,
        details: (
          <>
            <a onClick={() => handleSeeDetailsClick(String(Mfr_ID))}>Details</a>
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
    <>
      <TableComponent
        tableBody={manufacturersForTable}
        tableHeader={TableHeader}
      />
      <div
        style={{
          border: '1px solid black',
          borderRadius: '4px',
          position: 'relative',
          left: '0',
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
});
