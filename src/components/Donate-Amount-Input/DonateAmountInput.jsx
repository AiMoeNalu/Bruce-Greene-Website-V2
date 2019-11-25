import React from 'react';
import CurrencyInput from 'react-currency-input';

import './DonateAmountInput.scss';

const DonateAmountInput = () => (
    <CurrencyInput id='donate-amount-input' precision='2'/>
);

export default DonateAmountInput;