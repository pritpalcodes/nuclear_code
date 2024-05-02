function calculateEffects() {
    const yield = parseFloat(document.getElementById('yield').value);
    // const altitude = parseFloat(document.getElementById('altitude').value);
    const distance = parseFloat(document.getElementById('distance').value);
  
    const blastRadius = Math.sqrt(yield) * 8;
    const thermalRadius = Math.sqrt(yield) * 4;
    const initialRadiation = (yield * 1000) / (distance ** 2);
  
    const results = `
      <h2>Estimated Effects:</h2>
      <p><strong>Blast Radius:</strong> ${blastRadius.toFixed(2)} meters</p>
      <p><strong>Thermal Radiation Radius:</strong> ${thermalRadius.toFixed(2)} meters</p>
      <p><strong>Initial Radiation Exposure:</strong> ${initialRadiation.toFixed(2)} millisieverts</p>
    `;
  
    document.getElementById('results').innerHTML = results;
  }
  