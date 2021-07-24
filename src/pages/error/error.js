import React from 'react';
import { Link } from 'react-router';

export default class ErrorPage extends React.Component {

    
    render() {
        return (
            <div>
                <div className='alert alert-danger'>
                    <h1>Страница не найдена</h1>
                    <p>Перейти на <Link to='/'>главную страницу</Link></p>
                </div>
            </div>
            
        );
    }
}
