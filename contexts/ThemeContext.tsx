import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
  ReactNode,
} from "react";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};
const ThemeContext = createContext<ThemeContextType>({
  setTheme: null,
  theme: "",
});

export const ThemeContextProvider = ({
  children,
}: Partial<PropsWithChildren<ReactNode>>) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
