import React from 'react';

import './DonateForm.scss';

import UsernameInput from '../Username-Input/UserInput';
import DonateAmountInput from '../Donate-Amount-Input/DonateAmountInput';

class DonateForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            currency: 'USD',
            donateAmount: 0,
            donateMessage: '',
            mediaLink: ''
        }
    }   

    render(){
        return(
            <form id="donate-component">
                <UsernameInput/>
                <DonateAmountInput/>
            </form>
        )}
};

export default DonateForm;