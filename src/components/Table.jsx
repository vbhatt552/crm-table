import { useState } from 'react';
import { mockData } from '../data/mockData';
import SearchBar from './SearchBar';
import ColumnManager from './ColumnManager';
import DetailsModal from './DetailsModal';
import { exportToCSV } from '../utils/exportToCSV';
import { exportToExcel } from '../utils/exportToExcel';

const allColumns = ['Name', 'Phone', 'Email', 'Website', 'Date', 'Status', 'Subscribed'];

function Table() {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleColumns, setVisibleColumns] = useState([...allColumns]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [lockedColumns, setLockedColumns] = useState(['Name']); // ✅ FIXED: moved inside component

  const filteredData = mockData.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getStickyStyle = (colName) =>
    lockedColumns.includes(colName)
      ? {
          position: 'sticky',
          left: 0,
          background: '#fff',
          zIndex: 2,
        }
      : {};

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ColumnManager
        columns={allColumns}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
      />

      <button
        onClick={() => exportToCSV(filteredData)}
        style={{
          padding: '8px 16px',
          marginBottom: '1rem',
          backgroundColor: '#2563eb',
          color: '#fff',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Export CSV
      </button>

      <button
        onClick={() => exportToExcel(filteredData)}
        style={{
          marginLeft: '8px',
          padding: '8px 16px',
          marginBottom: '1rem',
          backgroundColor: '#2563eb',
          color: '#fff',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Export Excel
      </button>

      <div className="table-wrapper" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '1000px' }}>
          <thead>
            <tr>
              {visibleColumns.includes('Name') && <th style={getStickyStyle('Name')}>Name</th>}
              {visibleColumns.includes('Phone') && <th>Phone</th>}
              {visibleColumns.includes('Email') && <th>Email</th>}
              {visibleColumns.includes('Website') && <th>Website</th>}
              {visibleColumns.includes('Date') && <th>Date</th>}
              {visibleColumns.includes('Status') && <th>Status</th>}
              {visibleColumns.includes('Subscribed') && <th>Subscribed</th>}
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <tr key={row.id} onClick={() => setSelectedRow(row)} style={{ cursor: 'pointer' }}>
                  {visibleColumns.includes('Name') && (
                    <td style={getStickyStyle('Name')}>{row.name}</td>
                  )}

                  {visibleColumns.includes('Phone') && (
                    <td>
                      <a
                        href={`tel:${row.phone}`}
                        title="Call"
                        style={{ color: '#2563eb', textDecoration: 'none' }}
                      >
                        📞 {row.phone}
                      </a>
                    </td>
                  )}

                  {visibleColumns.includes('Email') && (
                    <td>
                      <a href={`mailto:${row.email}`} style={{ color: '#2563eb' }}>
                        {row.email}
                      </a>
                    </td>
                  )}

                  {visibleColumns.includes('Website') && (
                    <td>
                      <a
                        href={row.website}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#2563eb' }}
                      >
                        {row.website}
                      </a>
                    </td>
                  )}

                  {visibleColumns.includes('Date') && (
                    <td>
                      <input
                        type="date"
                        defaultValue={row.date}
                        style={{
                          padding: '4px 6px',
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                        }}
                      />
                    </td>
                  )}

                  {visibleColumns.includes('Status') && (
                    <td>
                      <select defaultValue={row.status} style={{ padding: '4px 6px' }}>
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </td>
                  )}

                  {visibleColumns.includes('Subscribed') && (
                    <td>
                      <input type="checkbox" defaultChecked={row.isSubscribed} />
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={visibleColumns.length} className="no-results">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <DetailsModal data={selectedRow} onClose={() => setSelectedRow(null)} />
    </div>
  );
}

export default Table;
