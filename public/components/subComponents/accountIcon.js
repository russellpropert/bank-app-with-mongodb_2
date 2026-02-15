function AccountIcon() {
  const { currentUser } = React.useContext(AuthContext);
  const [userName, setUserName] = React.useState('');

  React.useEffect(() => {
    if (!currentUser) {
      setUserName('');
      return;
    }

    fetch(`/find/user/${currentUser}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.name) {
          setUserName(data.name);
        }
      })
      .catch((err) => console.error('AccountIcon fetch error:', err));
  }, [currentUser]);

  const initial = userName ? userName.charAt(0).toUpperCase() : '';

  if (!currentUser) {
    return (
      <a
        href="#/login/"
        className="account-icon-login-link"
        aria-label="Log in"
      >
        Log In
      </a>
    );
  }

  return (
    <button
      className="account-icon"
      aria-label={`Account for ${userName}`}
      title={userName}
    >
      <span className="account-icon-initial" aria-hidden="true">{initial}</span>
    </button>
  );
}
