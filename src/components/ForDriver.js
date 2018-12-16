import React, { Component } from 'react';
import '../style/ForDriver.css'

class ForDriver extends Component{
    render() {
        return(
            <section className='container forDriver_container'>
                <div className='row'>
                    <span className='forDriver_container_img col'>
                    </span>
                    <div className='forDriver_container_article col'>
                        <h2 className='forDriver_container_article__title'>Куда вы планируете поехать?</h2>
                        <p className='forDriver_container_article__text'>Пусть эта поездка станет самой бюджетной в вашей жизни!</p>
                        <button className="btn btn-primary col forDriver_container_article__button">Предложить поездку</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default ForDriver;