import React from 'react';
import CurrencyInput from 'react-currency-input';

import './DonateAmountInput.scss';


//! Prefix comes from currency select (i.e. '$' for USD)

const DonateAmountInput = ({prefix='$'}) => (
    <CurrencyInput id='donate-amount-input' prefix={prefix} precision='2' value='2.00'/>
);

export default DonateAmountInput;