import React, {Component} from 'react';
import '../style/mainSlider.css';
import DatePicker from 'react-date-picker';

class MainSlider extends Component {
    state = {
        date: new Date(),
    };

    dateChange = date => this.setState({ date });

    render() {
        return (
            <section className='mainSlider'>
                <div className="container mainSlider_container">
                    <div className='mainSlider_container_title'>
                        <h2>Нам по пути</h2>
                        <h3>В дорогу с попутчиками без хлопот.</h3>
                    </div>
                    <div className='row'>
                        <div className="input-group mb-3 col">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Откуда?</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Default"
                                   aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <div className="input-group mb-3 col">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Куда?</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Default"
                                   aria-describedby="inputGroup-sizing-default"/>
                        </div>
                        <div className="input-group mb-3 col">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Дата?</span>
                            </div>
                            <DatePicker className="form-control" aria-label="Default"
                                        aria-describedby="inputGroup-sizing-default"
                                        onChange={this.dateChange}
                                        value={this.state.date}/>
                        </div>
                        <div className="btn btn-primary col mainSlider_container__buttonSearch">
                            <span>Найти поездку</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MainSlider;