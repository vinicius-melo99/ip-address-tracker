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

  const handleUserInput = ({ target: { value } }) =>{
    if(userSelection === "IP") {
        const charValidation = validateChar(value[value.length - 1]);
        if(charValidation){
          setUserInput(value);
        }   
    } else {
      setUserInput(value);
    }
  }

  const validateChar = (char) => {
    const regex = /^[0-9.]+$/;
    return regex.test(Number(char)) || char === '.';
  }

  const clearLastChar = ({ key }) => {
    if(key === 'Backspace' && userInput.length === 1) {
      setUserInput('');
    }
  }

  const handleSelect = ({ target: { value } }) => {
    setUserInput('');
    setUserSelection(value);
  }

  const handleSearch = () => {
    if(userSelection === "IP") {
       getIpData(`&ipAddress=${userInput}`);
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
    clearLastChar,
    handleSearch,
  }),[
     ipData,
     error, 
     loading, 
     userInput,
     userSelection,
     handleUserInput,
     handleSelect,
     clearLastChar,
     handleSearch,
    ]);

  return (
    <ApplicationContext.Provider value={values}>
      { children }
    </ApplicationContext.Provider>
  );
}
