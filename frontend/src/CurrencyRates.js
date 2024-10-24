import React, { useEffect, useState } from 'react';
import styles from './CurrencyRates.module.css';
import CurrencyChart from './CurrencyChart';

const CurrencyRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/db45e153a3e687e20e11290d/latest/usd');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data && data.conversion_rates) {
          setRates(data.conversion_rates);
        } else {
          throw new Error('Invalid API response');
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCurrencyRates();
  }, []);

  if (loading) return <p>Loading...</p>;

  // Extract USD rate and remove it from the rates object
  const { USD, ...otherRates } = rates;

  return (
    <div className={styles.CurrencyRates}>
      {/* Currency Chart Component */}
      <CurrencyChart data={otherRates} />

      {/* Add more components or content as needed */}
    </div>
  );
};

export default CurrencyRates;