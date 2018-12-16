import React, { Component } from 'react';
import '../style/footer.css';
import { Link } from "react-router-dom";

class Footer extends Component{
    render() {
        return(
            <footer>
                <div className='container footer_container'>
                    <div className='row'>
                        <div className='col'>
                            <Link to='#'>Как работает Drive2Gether</Link><br/>
                            <Link to='#'>Связаться с нами</Link>
                        </div>
                        <div className='col'>
                            <Link to='#'>О нас</Link><br/>
                            <Link to='#'>Условия использования</Link>
                        </div>
                        <div className='col'>
                            <Link to='#'>Часто задаваемые вопросы</Link><br/>
                            <Link to='#'>Пресса</Link>
                        </div>
                        <div className='col footer_container_icon'>
                            <Link to='#'><i className="fab fa-instagram"></i></Link>
                            <Link to='#'><i className="fab fa-facebook-square"></i></Link>
                            <Link to='#'><i className="fab fa-twitter"></i></Link>
                            <Link to='#'><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;