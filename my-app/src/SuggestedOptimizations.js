import React, {useState} from "react";

function SuggestedOptimizations() {
    const items = [
    { id: 1, description: 'Optimization 1: Improve performance by caching results.' },
    { id: 2, description: 'Optimization 2: Use lazy loading for images.' },
    { id: 3, description: 'Optimization 3: Reduce bundle size by code splitting.' },
    { id: 4, description: 'Optimization 4: Optimize database queries.' },
    { id: 5, description: 'Optimization 5: Enable gzip compression on the server.' },
  ];

  // State to track selected checkboxes
  const [selectedOptimizations, setSelectedOptimizations] = useState([]);

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    setSelectedOptimizations((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)  // Uncheck the box
        : [...prevSelected, id]  // Check the box
    );
  };

  // Handle the "Apply Selected Optimizations" button click
  const applyOptimizations = () => {
    if (selectedOptimizations.length === 0) {
      alert('Please select at least one optimization.');
    } else {
      alert(`Applying the following optimizations: ${selectedOptimizations.join(', ')}`);
    }
  };

  return (
    <div style={{padding: '50px', backgroundColor: "#E3E9FF", margin: "20px", borderRadius: "5px"}}>
      <h2 style={{textAlign:"left"}}>Optimization List</h2>

      {/* Render list of items with checkboxes */}
      <div>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
                width: "50%",
              padding: '10px',
              marginBottom: '10px',
                marginLeft: "auto",
                marginRight: "auto",
              border: '1px solid #4b9eff',
              display: 'flex',
                borderRadius: "5px",
              justifyContent: 'space-between',  // Space out the text and checkbox
              alignItems: 'center',  // Vertically align the checkbox and text
                backgroundColor: "white"
            }}
            onClick={() => handleCheckboxChange(item.id)}
          >
            <span style={{ textAlign: 'left', flex: 1 }}>{item.description}</span>
            <input
              type="checkbox"
              checked={selectedOptimizations.includes(item.id)}  // Check if item is selected
              onChange={() => handleCheckboxChange(item.id)}  // Toggle selection
            />
          </div>
        ))}
      </div>

      {/* Button to apply selected optimizations */}
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={applyOptimizations}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        >
          Apply Selected Optimizations
        </button>
      </div>
    </div>
  );
}

export default SuggestedOptimizations;
