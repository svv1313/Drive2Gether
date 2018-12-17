import React, { Component } from 'react';
import '../style/Header.css'
import { Link } from "react-router-dom";
import { Col } from 'reactstrap';

class Header extends Component{
    render() {
        return (
            <header>
                <div className='header_container container'>
                    <Col lg={6} className='header_logo'>
                        <div className='header_logo_container'>
                            <Link to='/'><h2 className='header_logo_container__title'>Drive2Gether</h2></Link>
                        </div>
                    </Col>
                    <Col lg={6}  className='header_linkBar'>
                        <div className='header_linkBar_container'>
                            <Link to='/found'><i className="fas fa-search"></i>Поиск поездок</Link>
                            <Link to='/addTrip'><i className="fas fa-plus-circle"></i>Добавить поездку</Link>
                            <Link to='/registration'>Регистрация</Link>
                            <Link to='/login'>Войти</Link>
                        </div>
                    </Col>
                </div>
            </header>
        )
    }
}

export default Header;
