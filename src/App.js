import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';
// импортируем React Login Home MainHeader AuthContext
function App() {
  const ctxData = useContext(AuthContext);
  console.log(ctxData)

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctxData.isLoggedIn && <Login />}
        {/* если ctxData равняется false то выйдет login, а если true то home */}
        {ctxData.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;