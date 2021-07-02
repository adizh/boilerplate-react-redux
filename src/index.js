import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './containers/App';
import {Provider} from 'react-redux'
import store from './redux/store'
import './index.css'
ReactDOM.render(
    <React.StrictMode>
       <Provider store={store}>
       <App />
       </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

=======
import Root from './components/Root'
import './index.css'
import {Provider} from 'react-redux'
import store from './redux/index'
ReactDOM.render(<Provider store={store}>

<Root/>
</Provider>,document.getElementById('root'))
>>>>>>> 5cc6083380017b9037dac1162d8cd49ff428642e
