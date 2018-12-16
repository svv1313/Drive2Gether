import React, { Component } from 'react';
import '../style/TopTrip.css'
import { Link } from "react-router-dom";

class CardTopTrip extends Component{
    render() {
        let { from, to, price } = this.props.cardInfo;
        return(
            <Link to='#' className='col'>
                <div className='cardBody row'>
                    <div className='cardBody_trip col'>
                        <p>{from}<br/>{to}</p>
                    </div>
                    <div className='cardBody_price col'>
                        <p className='cardBody_price__text'>Цена от</p>
                        <p className='cardBody_price__number'>{price}</p>
                    </div>
                </div>
            </Link>
        );
    }
}
export default CardTopTrip;

