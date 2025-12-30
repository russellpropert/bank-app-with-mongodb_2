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

const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await fetch(`/account/login/${email}`);
      const user = await result.json();
      console.log('AuthContext login result:', user);

      if (user && user.password === password) {
        setCurrentUser(user._id);
        setIsLoading(false);
        return { success: true };
      } else {
        const errorMsg = 'The email and password combination is incorrect';
        setError(errorMsg);
        setIsLoading(false);
        return { success: false, error: errorMsg };
      }
    } catch (err) {
      console.error('AuthContext login error:', err);
      const errorMsg = 'An error occurred during login';
      setError(errorMsg);
      setIsLoading(false);
      return { success: false, error: errorMsg };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
}
