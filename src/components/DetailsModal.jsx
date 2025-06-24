function DetailsModal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">✖</button>
        <h2>Customer Details</h2>
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value?.toString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetailsModal;
