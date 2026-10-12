import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [Articles, setArticles] = useState([]);
  const [category, setCategory] = useState("general"); // selected category
  const country = "us";

  // navbar-er list ekhane theke ashbe
  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        country,
        category,
        setCategory,
        categories,
        Articles,
        setArticles,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};