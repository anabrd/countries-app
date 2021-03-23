import './App.css';
import {Route, Switch} from 'react-router-dom'
import Auth from './pages/Auth'
import AuthCheck from './components/AuthCheck'
import Countries from './pages/Countries'
import {useState, useEffect} from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token !== null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  let countries = <Auth setIsLoggedIn = {setIsLoggedIn} />;
  if (isLoggedIn) {
    countries = <Countries/>
  }

  let personalRoutes = [
    <Route path="/personal/home"><div>Home</div></Route>,
    <Route path="/personal/profile"><div>Profile</div></Route>,
    <Route path="/personal/email"><div>Email</div></Route>,
    <Route path="/personal/setting"><div>Settings</div></Route>
  ]

  let authCheck = <Auth setIsLoggedIn = {setIsLoggedIn}/>

  return (
    
    <Switch>
      <Route exact path="/">
        <AuthCheck isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}>
          {countries}
        </AuthCheck>
      </Route>

      <Route path="/auth">
        <Auth setIsLoggedIn = {setIsLoggedIn}/>
      </Route>

      {/* Rendering an array of protected routed once auth successful */}
      <Route path="/personal">
        <AuthCheck isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}>
          {personalRoutes}
        </AuthCheck>
      </Route>
    
      <Route path="/countries">
        <AuthCheck isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}>
          {countries}
        </AuthCheck>
      </Route>

    </Switch>
  );
}

export default App;
