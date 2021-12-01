import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from './ErrorModal.module.css';
import ReactDOM from "react-dom";

/* 
        Я использую только этот компонент фона в сочетании с моим модальным. 
    Поэтому я буду хранить все эти компоненты в одном большом файле, 
    но вы также можете разделить его на несколько файлов компонентов, 
    особенно, если вы будете использовать Backdrop также в сочетании с другими Компонентами.
*/
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = props => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
}

const ErrorModal = props => {
    return (
        <React.Fragment>
            {/* 
            Теперь метод createPortal принимает два аргумента.
          Первый - это ваш узел React, который нужно отобразить.
          И здесь я могу отрендерить свой фон, скажем так. 
          Здесь важно JSX, так что вы не разбираете только Фон, как это, 
          вместо этого вы действительно визуализируете это так. 
          Это тоже очень удобно потому что это позволяет мне, конечно, 
          переслать сюда мою опору onClick и получить доступ к реквизитам 
          на Подтвердить который мне нужно проанализировать здесь, чтобы убедиться, 
          что что все еще работает.
         */}
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('modal-root')
            )}
        </React.Fragment>

    )
};

export default ErrorModal;