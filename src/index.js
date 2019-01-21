import React from 'react';//biblioteca react
import ReactDOM from 'react-dom';//biblioteca de react orienttada a desarollo web
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';//permite que la aplicacion web siga funcionando fluida,
//puesto que mantiene un registro de los datos del servidor sis e pierde la conexion.

ReactDOM.render(<App />, document.getElementById('root'));//metodo de la libreria dom,
//renderisa todo lo que se encuentra en root de app.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
