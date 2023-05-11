import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { HomePage } from '.';
import { TableHeader } from '../components/Table/const';
import { ManufacturerContext } from '../context/manufacturers';
import { ManufacturerDetail } from '../interfaces/manufacturer';
const mockedNavigate = vi.fn();
vi.mock('react-router-dom', () => ({ useNavigate: () => mockedNavigate }));

describe('HomePage', () => {
  beforeEach(() => {
    render(
      <ManufacturerContext.Provider
        value={{
          manufacturerDetail: {} as ManufacturerDetail,
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
        <HomePage />
      </ManufacturerContext.Provider>
    );
  });

  it('render table', () => {
    expect(screen.getAllByText(TableHeader[0])).toBeTruthy();
    expect(screen.getByTestId('row0')).toBeTruthy();
    expect(screen.getAllByText('Details')).toBeTruthy();
    expect(screen.getAllByText('Load more...')).toBeTruthy();
  });
  it('should handle redirect to details page', () => {
    const button = screen.getAllByText('Details')[0];
    fireEvent.click(button);
    expect(mockedNavigate).toHaveBeenCalled();
  });
});
