import React from 'react';
import { ManufacturerContext } from '../context/manufacturers';
import { useNavigate } from 'react-router-dom';
import './Details.scss';

export const DetailsPage = () => {
  const {
    manufacturerDetail: { Country, Mfr_ID, Mfr_Name, models },
  } = React.useContext(ManufacturerContext);
  console.log(Mfr_Name);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!Mfr_Name) {
      navigate('/');
    }
  }, []);

  return (
    <main className='details-container'>
      <section className='details-container__label'>
        <b>Brand name:</b> {Mfr_Name}
      </section>
      <section className='details-container__label'>
        <b>Brand Id:</b> {Mfr_ID}
      </section>
      <section className='details-container__label'>
        <b>Country:</b> {Country}
      </section>
      <section className='details-container__label'>
        <b>Models:</b>{' '}
      </section>
      <table>
        <tbody>
          {models.map((item, index) => (
            <tr key={index + item.Make_Name}>
              <td>{item.Model_Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
