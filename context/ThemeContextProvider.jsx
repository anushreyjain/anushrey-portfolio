"use client";

import React, { createContext, useContext } from "react";

const ThemeContext = createContext(null);

// Dark mode only for now. The API is kept so existing consumers keep working.
export default function ThemeContextProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
