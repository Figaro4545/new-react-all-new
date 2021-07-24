import React from 'react';
import { Link } from 'react-router';
import './styles.less';

export default class Header extends React.Component {
    
    static path = '/';
    
    render() {
        return (
            <nav className='nav'>
                <a className='navbar-brand' href='/'>TODO</a>
                <a className='nav-link'><Link to='/'>Home</Link></a>
                <a className='nav-link'><Link to='/contact'>Contact</Link></a>
                <a className='nav-link'><Link to='/error404'>Страница 404</Link></a>                
            </nav>
        );
    }    
}
