function ColumnManager({ columns, visibleColumns, setVisibleColumns }) {
  const handleToggle = (column) => {
    if (visibleColumns.includes(column)) {
      setVisibleColumns(visibleColumns.filter((col) => col !== column));
    } else {
      setVisibleColumns([...visibleColumns, column]);
    }
  };

  return (
    <div className="column-manager-container">
      <span className="column-manager-title">Manage Columns:</span>
      <div className="column-checkbox-group">
        {columns.map((col) => (
          <label key={col} className="column-checkbox-label">
            <input
              type="checkbox"
              checked={visibleColumns.includes(col)}
              onChange={() => handleToggle(col)}
            />
            {col}
          </label>
        ))}
        
      </div>
     

    </div>
  );
}

export default ColumnManager;
