import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import storeConfiguration from './redux/store/storeConfig';
import './index.css'; 
 
const store = storeConfiguration();

store.subscribe(() => {});

const jsx = (
    <Provider store={ store }>
        <App />
    </Provider>
);



 

render(jsx, document.querySelector('#root'));