import { createContext, useContext, useEffect, useState } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const values = {

  };

  return (
    <GameContext.Provider value={values}>
      { children }
    </GameContext.Provider>
  )
};