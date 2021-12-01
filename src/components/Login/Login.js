import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
// импорты Card, classes, Button, AuthContext
/* 
Обратите внимание, что я создал эту функцию-редюсера. 
вне функции компонента. И я сделал это, потому что внутри этой функции-редюсера 
нам не нужны данные который генерируется внутри функции компонента. 
Таким образом, эта функцию-редюсера может быть создана вне области видимости этой компонентной функции 
потому что ему не нужно ни с чем взаимодействовать что определяется внутри функции компонента. 
Все данные, которые потребуются и используется внутри функции-редюсера будет передано в эту функцию 
когда он выполняется React'ом, автоматически.
*/
// редьюсер функция emailReducer
const emailReducer = (prevState, action) => {
  // проверка если action.type === "USER_INPUT" то помещает значение действия в value и isValid
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),// проверка на собачку
    };
  }
  // проверка если action.type === "INPUT_BLUR" то помещает предыдущее значение действия в value и isValid
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.includes("@"),// проверка на собачку
    };
  }// иначе возвращет пустую  строку и false
  return {
    value: "",
    isValid: false,
  };
};
// редьюсер функция passwordReducer
const passwordReducer = (prevState, action) => {
  // проверка если action.type === "USER_INPUT" то помещает значение действия в value и isValid
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6, //проверка на длину(должно быть больше 6)
    };
  }
  // проверка если action.type === "INPUT_BLUR" то помещает предыдущее значение действия в value и isValid
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 6, //проверка на длину(должно быть больше 6)
    };
  }
  return {// иначе возвращет пустую  строку и false
    value: "",
    isValid: false,
  };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    // изначально состояние редьюсера
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    // изначально состояние редьюсера
    value: "",
    isValid: false,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const authCtx = useContext(AuthContext);
// побочный эффект , который вызывается если изменяются ailIsValid, passwordIsValid
  useEffect(() => {
    // помещаем функцию setTimeout(вызвается в течение5 секунд) в переменнную таймер
    const timer = setTimeout(() => {
      // отображение в консоли текста EFFECT
      console.log('EFFECT');
      // вызвается setFormIsValid внутри которой будет true, если все значения будут true , а если хотя бы одно значение будет false то внутри setFormIsValid которой будет false
      setFormIsValid(
        emailState.isValid && passwordState.isValid
      );
    }, 500);

    return () => {
      // очищает функцию таймера и вызывает текст
      console.log('clean up');
      clearTimeout(timer);
    }

  }, [emailIsValid, passwordIsValid]); // зависемости побочного эффекта emailIsValid, passwordIsValid

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });// в диспатч функцию dispatchEmail помещаем действие(USER_INPUT) и значние инпута
    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value })// в диспатч функцию dispatchPassword помещаем действие(USER_INPUT) и значние инпута
    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });// в диспатч функцию(dispatchEmail)  помещаем действие(INPUT_BLUR)
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" })// в диспатч функцию(dispatchPassword)  помещаем действие(INPUT_BLUR)
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // чтобы не стирались данные
    authCtx.onLogin(emailState.value, passwordState.value);// сохраняем в onLogin emailState.value, passwordState.value
  };

  return (
    // создаем внтури обертки кард форму
    <Card className={classes.login}>
      {/*  при нажатии конпки сработает submitHandler  */}
      <form onSubmit={submitHandler}>
        <div
        // emailState.isValid равняется false? если равняется то будет класс invalid , а если оно не равняется false то ничего не будет приминятся
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}// в свойтво value даем emailState.value           
            onChange={emailChangeHandler}// при изменении значения инпута будет работать функция emailChangeHandler           
            onBlur={validateEmailHandler}// onBlur работает при потере фокуса и срабатывает validateEmailHandler
          />
        </div>
        <div
          // passwordState.isValid равняется false? если равняется то будет класс invalid , а если оно не равняется false то ничего не будет приминятся
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ""
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}// в свойтво value даем значение passwordState.value
            onChange={passwordChangeHandler}// при изменении значения инпута будет работать функция passwordChangeHandler
            onBlur={validatePasswordHandler}// onBlur работает при потере фокуса и срабатывает validatePasswordHandler
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            {/* в свойсво disabled даем !formIsValid, т.е. false*/}
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;