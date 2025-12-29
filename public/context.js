const ThemeContext = React.createContext(null);

function ThemeProvider({ children }) {
  // Initialize from localStorage, default to 'light'
  const initialTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = React.useState(initialTheme);

  // Apply theme to body and persist to localStorage
  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
