import React, { useState, useEffect } from 'react';

const GeolocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);

  // Function to get user's current position
  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        // Call the function to fetch data from your geolocation API
        fetchDataFromAPI(latitude, longitude);
      }, (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  // Function to fetch data from a geolocation API
  const fetchDataFromAPI = async (latitude, longitude) => {
    try {
      const response = await fetch(`YOUR_GEOLOCATION_API_ENDPOINT?lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Fetching data failed", error);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div>
      <h2>User Location</h2>
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
      <h2>Data from Geolocation API</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default GeolocationComponent;