import { useState } from 'react'
import Swal from 'sweetalert2';

const useGetIpData = () => {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getIpData = async (ENDPOINT = '') => {
    setLoading(true);
    try{
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_LntaUjL5SwmMZncXgx8pPrDPK0BW0${ENDPOINT}`);

      if(response.ok){
        const data = await response.json();
        setIpData(data)
      } else {
        const error = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Oopss...',
          html: `Error ${error.code}: ${error.messages}`,
          timer: 4500,
          timerProgressBar: true,
        })
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
    
  }; 

  return ({
    ipData,
    error,
    loading,
    getIpData,
  });
};

export default useGetIpData;