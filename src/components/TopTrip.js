import React, { Component } from 'react';
import '../style/TopTrip.css';
import CardTopTrip from './CardTopTrip';

class TopTrip extends Component{
    render() {
        const cardInfo = [
            { from: 'Харьков', to: 'Киев', price: ' 500 грн' },
            { from: 'Харьков', to: 'Львов', price: ' 700 грн' },
            { from: 'Харьков', to: 'Купянск', price: ' 70 грн' },
        ];
        return(
            <section className='topTrip'>
                <div className='container topTrip_container'>
                    <div className='topTrip_container_article'>
                        <p>Куда вы хотите поехать?<br/>Пара кликов – и можно отправляться в путь прямо с порога.</p>
                    </div>
                    <div className='topTrip_container_trip row'>
                        {cardInfo.map((item, key) => <CardTopTrip key={key} cardInfo={item}/>)}
                    </div>
                </div>
            </section>
        );
    }
}

export default TopTrip;