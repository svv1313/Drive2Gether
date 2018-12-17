import React, { Component } from "react";
import '../style/LogoInForm.css'

class LogoInForm extends Component{
    render() {
        return(
            <div className="logo">
                <div className='logo_container container'>
                    <p className='logo_container__ihr'>Drive2</p><p className='logo_container__logo'>Gether</p>
                </div>
            </div>
        )
    }
}

export default LogoInForm;
