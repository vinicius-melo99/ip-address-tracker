import React, { useState, useMemo, useEffect } from 'react';
import useGetIpData from '../hooks/useGetIpData';
import ApplicationContext from './ApplicationContext';

export default function ApplicationProvider({ children }) {
  const { ipData, error, loading, getIpData } = useGetIpData();
  const [userInput, setUserInput] = useState('');
  const [userSelection, setUserSelection] = useState('IP');
  
  useEffect(() => {
    getIpData();
  }, []);

  const handleUserInput = ({ target: { value } }) => setUserInput(value);

  const handleSelect = ({ target: { value } }) => {
    setUserInput('');
    setUserSelection(value);
  }

  const handleSearch = () => {
    if(userSelection === "IP") {
       getIpData(`&ipAddress=${userInput}`);
    } else {
       getIpData(`&domain=${userInput}`);
    }
  }
  
  const values = useMemo(() => ({
    ipData,
    error,
    loading,
    userInput,
    userSelection,
    handleUserInput,
    handleSelect,
    handleSearch,
  }),[
     ipData,
     error, 
     loading, 
     userInput,
     userSelection,
     handleUserInput,
     handleSelect,
     handleSearch,
    ]);

  return (
    <ApplicationContext.Provider value={values}>
      { children }
    </ApplicationContext.Provider>
  );
}
