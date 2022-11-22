import { createContext, useState } from "react";

export const ThemeContext = createContext({  });

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState({
    palette: {
      dark: false,
    },
  });

  const changeDarkTheme = () => {
    setTheme({ ...theme, palette: { dark: !theme.palette.dark } });
  };
  return (
    <ThemeContext.Provider value={{ theme, changeDarkTheme, data: "string" }}>
      {children}
    </ThemeContext.Provider>
  );
};
