import React from 'react';

// подключаем наш DevTools
import { DevTools } from './utils/index';

export default class App extends React.Component {
    
    static path = '/';
    
    render() {
        return (
            // изменяем код, если продакшен - то DevTools не показывается
            // NODE_ENV взята из webpack.config.js
            <div>
                <h1>Привет, Сумин Вячеслав</h1>
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
           
            
        );
    }
    
}
