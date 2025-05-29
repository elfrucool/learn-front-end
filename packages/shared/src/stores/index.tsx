import React from 'react';
import { createContext, useContext, ReactNode } from 'react';
import AuthStore from './authStore';
import ClicksStore from './clicksStore';

// Create store instances
export const authStore = new AuthStore();
export const clicksStore = new ClicksStore();

// Create context
const StoreContext = createContext({
  authStore,
  clicksStore,
});

// Create provider component
export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider value={{ authStore, clicksStore }}>
      {children}
    </StoreContext.Provider>
  );
};

// Hook to use stores
export const useStores = () => {
  return useContext(StoreContext);
};