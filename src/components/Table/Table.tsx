import './Table..scss';

interface TableComponentProps {
  tableBody?: Record<string, string>[];
  tableHeader?: string[];
}

const TableComponent = ({ tableBody, tableHeader }: TableComponentProps) => {
  return (
    <>
      {tableBody?.length ? (
        <table>
          <thead>
            <tr>
              {tableHeader?.map((item: string) => (
                <td>{item}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody.map((item) => (
              <tr>
                {Object.keys(item).map((key: string) => (
                  <td>{item[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>No results found!</>
      )}
    </>
  );
};

export default TableComponent;
