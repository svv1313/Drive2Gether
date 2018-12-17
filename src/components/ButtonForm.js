import React, {Component} from "react";
import '../style/ButtonForm.css'

class ButtonForm extends Component {

    render() {
        const { placeholder } = this.props;
        return (
            <button type='submit' className='form__button'>{ placeholder }</button>
        );
    }
}

export default ButtonForm;
