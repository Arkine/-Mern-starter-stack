import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from 'app/services/store';

import App from 'app/views/app';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);