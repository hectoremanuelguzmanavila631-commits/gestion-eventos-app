// Ejemplo conceptual de gestión de estado de usuario (usando React Context)
// AuthContext.js

import React, { createContext, useState } from 'react';

// Copilot podría haber ayudado a generar el esqueleto del contexto:
// "Crear un contexto de autenticación con estado de usuario (currentUser) y funciones de login y logout"
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (userData) => {
    // Lógica de autenticación (ej. llamada a API)
    setCurrentUser(userData);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
