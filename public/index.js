const Route       = ReactRouterDOM.Route;
const HashRouter  = ReactRouterDOM.HashRouter;

function Spa() {
  return (
    <HashRouter>
      <ThemeProvider>
        <AuthProvider>
          <div>
            <Navbar/>
            <div className="container" style={{padding: "20px"}}>
              <Route path="/" exact component={Home} />
              <Route path="/createAccount/" component={CreateAccount} />
              <Route path="/login/" component={Login} />
              <Route path="/deposit/" component={Deposit} />
              <Route path="/withdraw/" component={Withdraw} />
              <Route path="/balance/" component={Balance} />
              <Route path="/allData/" component={AllData} />
              <Route path="/about/" component={About} />
            </div>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa/>, document.getElementById('root'));
