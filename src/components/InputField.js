import React, { Component } from "react";
import '../style/InputField.css'

class InputField extends Component{

    isLogin(formType, placeholder) {
        let leftSpan = <span className='inputField__placeholder'>{placeholder}<span className='inputField__placeholder__reg'>*</span></span>;
        let rightSpan = <span className='inputField__placeholder'>{placeholder}</span>
        if (formType === 'login') return {rightSpan, leftSpan: null};
        if (formType === 'registration') return {leftSpan, rightSpan: null};
    }

    render() {
        const { type, name, id, value, onChangeValue, placeholder, formType } = this.props;
        const { isLogin } = this;
        return (
            <div className='inputWrap'>
                {isLogin(formType,placeholder).leftSpan}
                <input
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    onChange={ evt => {
                        onChangeValue(evt)
                    }}
                />
                {isLogin(formType,placeholder).rightSpan}
            </div>
        );
    }
}

export default InputField;
