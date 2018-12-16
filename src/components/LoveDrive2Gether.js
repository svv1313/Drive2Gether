import React, { Component } from 'react';
import CardLove from './CardLove'
import '../style/LoveDrive2.css'

class LoveDrive2Gether extends Component{
    render() {
        const cardInfo = [
            { icon: 'fas fa-award', title: 'Сообщество', text: 'Мы хотим узнать наших пользователей как можно лучше. Наша команда проверяет профили и отзывы. Личность каждого участника подтверждена. Так что вы знаете наверняка, с кем садитесь в машину.' },
            { icon: 'fas fa-map-marked-alt', title: 'Рядом', text: 'Забудьте о том, что надо спешить на станцию через весь город. Ловите попутку прямо за углом.'},
            { icon: 'fas fa-stopwatch', title: 'Скорость', text: '60 секунд. Именно столько в среднем требуется, чтобы найти попутчиков поблизости.' }
        ];
        return (
            <div className='container loveDriver'>
                <div className='loveDrive_container_title'>
                    <p>3 причины полюбить Drive2Gether</p>
                </div>
                <div className='row loveDrive_container'>
                    { cardInfo.map((cardInfo, key) => <CardLove cardInfo={cardInfo} key={key}/>) }
                </div>
            </div>
        );
    }
}

export default LoveDrive2Gether;