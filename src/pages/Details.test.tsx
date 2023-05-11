import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DetailsPage } from '.';
import { ManufacturerContext } from '../context/manufacturers';
vi.mock('react-router-dom', () => ({
  useLocation: () => ({ state: { mfId: 957 } }),
  useNavigate: () => {},
}));

describe('HomePage', () => {
  beforeEach(() => {
    render(
      <ManufacturerContext.Provider
        value={{
          manufacturerDetail: {
            models: [
              {
                Make_ID: 957,
                Make_Name: 'Dragon Trikes',
                Model_ID: 27049,
                Model_Name: 'Bike',
              },
              {
                Make_ID: 957,
                Make_Name: 'Dragon Trikes',
                Model_ID: 27050,
                Model_Name: 'Trike',
              },
            ],
            Country: 'UNITED STATES (USA)',
            Mfr_CommonName: 'BMW',
            Mfr_ID: 957,
            Mfr_Name: 'BMW OF NORTH AMERICA, LLC',
            VehicleTypes: [],
          },
          setManufacturers: () => {},
          setMfDetails: () => {},
          setRedirectTo: () => {},
          currentPage: 1,
          setCurrentPage: () => {},
          redirectTo: '',
          manufacturers: [
            {
              Country: 'UNITED STATES (USA)',
              Mfr_CommonName: 'Tesla',
              Mfr_ID: 955,
              Mfr_Name: 'TESLA, INC.',
              VehicleTypes: [
                {
                  IsPrimary: true,
                  Name: 'Passenger Car',
                },
                {
                  IsPrimary: false,
                  Name: 'Truck ',
                },
                {
                  IsPrimary: false,
                  Name: 'Multipurpose Passenger Vehicle (MPV)',
                },
              ],
            },
            {
              Country: 'UNITED KINGDOM (UK)',
              Mfr_CommonName: 'Aston Martin',
              Mfr_ID: 956,
              Mfr_Name: 'ASTON MARTIN LAGONDA LIMITED',
              VehicleTypes: [
                {
                  IsPrimary: false,
                  Name: 'Passenger Car',
                },
                {
                  IsPrimary: false,
                  Name: 'Multipurpose Passenger Vehicle (MPV)',
                },
              ],
            },
            {
              Country: 'UNITED STATES (USA)',
              Mfr_CommonName: 'BMW',
              Mfr_ID: 957,
              Mfr_Name: 'BMW OF NORTH AMERICA, LLC',
              VehicleTypes: [],
            },
            {
              Country: 'UNITED STATES (USA)',
              Mfr_CommonName: null,
              Mfr_ID: 958,
              Mfr_Name: 'JAGUAR LAND ROVER NA, LLC',
              VehicleTypes: [
                {
                  IsPrimary: true,
                  Name: 'Passenger Car',
                },
                {
                  IsPrimary: false,
                  Name: 'Truck ',
                },
                {
                  IsPrimary: false,
                  Name: 'Multipurpose Passenger Vehicle (MPV)',
                },
              ],
            },
            {
              Country: 'UNITED STATES (USA)',
              Mfr_CommonName: 'Maserati',
              Mfr_ID: 959,
              Mfr_Name: 'MASERATI NORTH AMERICA, INC.',
              VehicleTypes: [
                {
                  IsPrimary: false,
                  Name: 'Passenger Car',
                },
                {
                  IsPrimary: true,
                  Name: 'Multipurpose Passenger Vehicle (MPV)',
                },
              ],
            },
          ],
        }}
      >
        <DetailsPage />
      </ManufacturerContext.Provider>
    );
  });

  it('render details', () => {
    expect(screen.getByTestId('models-table')).toBeTruthy();
    expect(screen.getAllByTestId('brand-name')).toBeTruthy();
  });
});
