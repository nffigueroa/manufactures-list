import React from 'react';
import { ManufacturerContext } from '../context/manufacturers';
import { useLocation } from 'react-router-dom';
import './Details.scss';
import { useManufacturerDetails } from '../hooks';

export const DetailsPage = () => {
  const {
    manufacturerDetail: { Country, Mfr_ID, Mfr_Name, models },
  } = React.useContext(ManufacturerContext);

  const ctx = React.useContext(ManufacturerContext);
  console.log(ctx);

  const location = useLocation();
  const { setManufacturerId } = useManufacturerDetails();

  React.useEffect(() => {
    setManufacturerId(location?.state?.mfId);
  }, [location]);

  return (
    <main className='details-container'>
      <section className='details-container__label' data-testid={'brand-name'}>
        <b>Brand name:</b> {Mfr_Name}
      </section>
      <section className='details-container__label'>
        <b>Brand Id:</b> {Mfr_ID}
      </section>
      <section className='details-container__label'>
        <b>Country:</b> {Country}
      </section>
      <section className='details-container__label'>
        <b>Models:</b>
      </section>
      <table data-testid={'models-table'}>
        <tbody>
          {models?.length &&
            models.map((item, index) => (
              <tr key={index + item.Make_Name}>
                <td>{item.Model_Name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};
