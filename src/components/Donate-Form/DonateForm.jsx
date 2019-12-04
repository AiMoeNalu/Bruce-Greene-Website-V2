import React from 'react';

import './DonateForm.scss';

import UsernameInput from '../Username-Input/UserInput';
import Dropdown from '../Dropdown/Dropdown';
import DonateAmountInput from '../Donate-Amount-Input/DonateAmountInput';
import CURRENCY_DATA from '../../assets/Currency/CurrencyData';

class DonateForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            currencyData: CURRENCY_DATA,
            currency: 'USD',
            currencySymbol: '$',
            donateAmount: 0,
            donateMessage: '',
            mediaLink: ''
        }
    }   

    onSelect = (e) => {
        console.log(e.target);
    } 

    render(){
        const {currencyData, currency} = this.state;
        const {onSelect} = this;
        return(
            <form id="donate-component">
                <UsernameInput/>
                <Dropdown text={currency} dropdownList={currencyData} onSelect={onSelect}/>
                <DonateAmountInput/>
            </form>
        )}
};

export default DonateForm;