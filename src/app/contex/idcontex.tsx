// IdContext.tsx
import React, { createContext, useState, useContext } from 'react';

// Crea el contexto
const IdContext = createContext<{ id: number | null; setId: (id: number | null) => void } | null>(null);

// Crea el proveedor del contexto
export const IdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [id, setId] = useState<number | null>(null);

  return (
    <IdContext.Provider value={{ id, setId }}>
      {children}
    </IdContext.Provider>
  );
};

// Hook personalizado para acceder al valor del contexto
export const useId = () => {
  const idContex = useContext(IdContext);
  if (!idContex) {
    throw new Error('useId debe usarse dentro de un IdProvider');
  }
  return idContex;
};
