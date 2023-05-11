import './Table..scss';

interface TableComponentProps {
  tableBody?: Record<string, string>[];
  tableHeader?: string[];
}

const TableComponent = ({ tableBody, tableHeader }: TableComponentProps) => {
  return (
    <>
      {tableBody?.length ? (
        <table data-testid={'table-component'}>
          <thead>
            <tr>
              {tableHeader?.map((item: string, index: number) => (
                <td key={index + item}>{item}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody.map((item, index) => (
              <tr
                data-testid={'row' + index}
                key={`${index}${item[Object.keys(item)[0]]}`}
              >
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
