import React, { useState, useEffect } from 'react';
// делаем возможное использование State, useEffect 

//создали контекст с исходными данными для того чтобы можно было передавать данные 
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});
// сделали компоненту AuthContextProvider и экспортироваои ее для использования контекста
export const AuthContextProvider = (props) => {
    // создали состояние с изначальным значением false
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // создали useEffect который будет работать один раз при перезагрузке т к [] 
    useEffect(() => {
        // создаем переменную storedUserLoggedInInformation и там достаем локальное хранилище с помощью ключаisLoggedIn
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
        // если знаечение локального хранилища равно 1 то вызываем setIsLoggedIn(true) чтобы изменить false на true
    }, []);
    // функция которая удаляет локальное хранилище и  вызывает setIsLoggedIn(false)
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };
// функция которая создает локальное хранилище и дает значение 1, также вызывает setIsLoggedIn(true)
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    return (
        // AuthContext.Provider обертка где value передаем isLoggedIn: isLoggedIn,onLogout: logoutHandler,onLogin: ->
        //  -> loginHandler, чтобы передать дочерним компонентам данные
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {/* говорим что у AuthContext будут дети */}
            {props.children}
        </AuthContext.Provider>
    );
};
// экспорт AuthContext
export default AuthContext;