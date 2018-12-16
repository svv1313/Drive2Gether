import React, { Component } from 'react';

class CardLove extends Component{
    render() {
        const { icon, title, text, key } = this.props.cardInfo;
        return(
            <div className='cardLove col' key={key}>
                <div className='cardLove_icon'>
                    <i className={icon}></i>
                </div>
                <div className='cardLove_article'>
                    <p className='cardLove_title'>{ title }</p>
                    <p className='cardLove_text'>{ text }</p>
                </div>
            </div>
        );
    }
}

export default CardLove;