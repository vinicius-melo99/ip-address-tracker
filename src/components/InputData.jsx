import React, { useContext } from 'react'
import ApplicationContext from '../context/ApplicationContext';

const InputData = () => {
  const { 
    userInput, 
    handleUserInput,
    handleSearch,
    userSelection
  } = useContext(ApplicationContext);

  return (
    <>
      <input 
        name="userInput" 
        type="text"
        placeholder={
          userSelection === "IP" ? (
          "Search for any valid IP Address ex: 165.132.87.10")
          : "Search for any valid domain ex: www.google.com"
        }
        onChange={ handleUserInput }
        onKeyDown={({ key }) => {
          if(key === 'Enter' && userInput.length > 0) handleSearch()
        }}
        value={ userInput }
        maxLength={ userSelection === "IP" ? "15"
                  : "100" }
    />
      <button className='search-button'
        onClick={ handleSearch }
        disabled={ !userInput.length > 0 }
      >
      </button>
    </>
   
  )
}

export default InputData