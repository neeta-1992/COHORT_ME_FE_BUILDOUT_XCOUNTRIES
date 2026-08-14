import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://xcountries-backend.labs.crio.do/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px', alignItems: 'center', justifyContent: 'center' }}>
        {countries.map((country: any) => (
          <div key={country.abbr} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', textAlign: 'center', width: '110px', height: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', rowGap: '10px' }}>
            <img src={country.flag} alt={country.name} width="50" height="30" />
            <h2 style={{ fontSize: '16px' }}>{country.name}</h2>
          </div>
        ))}
      </div >
    </>
  )
}

export default App
