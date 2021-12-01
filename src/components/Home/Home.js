import React,{useContext} from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Home.module.css';
import AuthContext from '../../store/auth-context';
// импортируем React, Card, Button, classes, AuthContext
const Home = () => {
  // помещаем в переменную контекст AuthContext
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      {/* при клике конпки сработает authCtx.onLogout */}
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;