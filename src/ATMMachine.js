import React, { useState } from 'react';
import './ATMMachine.css';
import { Link } from 'react-router-dom';

const ATMMachine = ({logOut}) => {
  const [balance, setBalance] = useState(100000000);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [rechargeAmount, setRechargeAmount] = useState('');
  const [rechargeNumber, setRechargeNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [message, setMessage] = useState('');
  const [theme, setTheme] = useState('light');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cardFlipped, setCardFlipped] = useState(false);

  const handleWithdraw = () => {
    const amount = parseInt(withdrawAmount);

    if (amount > balance) {
      setMessage('Insufficient balance!');
    } else if (amount <= 0 || isNaN(amount)) {
      setMessage('Invalid amount!');
    } else {
      setBalance(balance - amount);
      setMessage(`Successfully withdrew $${amount}`);
      setWithdrawAmount('');
    }
  };

  const handleDeposit = () => {
    const amount = parseInt(depositAmount);

    if (amount <= 0 || isNaN(amount)) {
      setMessage('Invalid amount!');
      return;
    }

    setBalance(balance + amount);
    setMessage(`Successfully deposited $${amount}`);
    setDepositAmount('');
  };

  const handleRecharge = () => {
    if (rechargeNumber === '') {
      setMessage('Please enter a phone number to recharge!');
      return;
    }

    if (rechargeAmount === '' || isNaN(rechargeAmount)) {
      setMessage('Invalid recharge amount!');
      return;
    }

    setBalance(balance - parseInt(rechargeAmount));
    setMessage(`Successfully recharged ${rechargeNumber} with $${rechargeAmount}`);
    setRechargeAmount('');
    setRechargeNumber('');
  };

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleCardNumberChange = (e) => {
    const { value } = e.target;
    setCardNumber(value);
  };

  const handleCVVChange = (e) => {
    const { value } = e.target;
    setCVV(value);
  };

  const handleExpiryDateChange = (e) => {
    const { value } = e.target;
    setExpiryDate(value);
  };

  const handleLogin = () => {
    // Perform login validation here
    if (username === 'user' && password === 'pass') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      setUsername('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleCardFlip = () => {
    setCardFlipped(!cardFlipped);
  };

 
  return (
    <div className={`atm-machine atm-machine--${theme}`}>
      <h1 className="atm-machine__title">ATM Machine</h1>
      <button onClick={handleLogout}>Log Out</button>
      <p className="atm-machine__balance">Current Balance: ${balance}</p>

      {/* Withdraw Section */}
      <div className="atm-machine__section">
        <h2>Withdraw</h2>
        <input
          className="atm-machine__input"
          type="text"
          placeholder="Enter amount to withdraw"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <button className="atm-machine__button" onClick={handleWithdraw}>
          Withdraw
        </button>
      </div>

      {/* Deposit Section */}
      <div className="atm-machine__section">
        <h2>Deposit</h2>
        <input
          className="atm-machine__input"
          type="text"
          placeholder="Enter amount to deposit"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
         <input
            className="atm-machine__input"
            type="text"
            placeholder="Enter account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />

        <button className="atm-machine__button" onClick={handleDeposit}>
          Deposit
        </button>
      </div>

      {/* Recharge Section */}
      <div className="atm-machine__section">
        <h2>Recharge</h2>
        <input
          className="atm-machine__input"
          type="text"
          placeholder="Enter phone number"
          value={rechargeNumber}
          onChange={(e) => setRechargeNumber(e.target.value)}
        />
        <input
          className="atm-machine__input"
          type="text"
          placeholder="Enter amount to recharge"
          value={rechargeAmount}
          onChange={(e) => setRechargeAmount(e.target.value)}
        />
        <button className="atm-machine__button" onClick={handleRecharge}>
          Recharge
        </button>
      </div>

      <p className="atm-machine__message">{message}</p>

      <div
        className={`atm-machine__card ${cardFlipped ? 'atm-machine__card--flipped' : ''}`}
        onClick={handleCardFlip}
      >
        {/* Card Front */}
        <div className="atm-machine__card-front">
          <div className="atm-machine__card-chip"></div>
          <input
            className="atm-machine__card-number"
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
          <div className="atm-machine__card-details">
            <div className="atm-machine__card-detail">
              <div className="atm-machine__card-label">Card Holder</div>
              <div className="atm-machine__card-holder"></div>
            </div>
            <div className="atm-machine__card-detail">
              <div className="atm-machine__card-label">Expires</div>
              <input
                className="atm-machine__card-expiry"
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiryDateChange}
              />
            </div>
          </div>
        </div>

        {/* Card Back */}
        <div className="atm-machine__card-back">
          <div className="atm-machine__card-stripe"></div>
          
          <input
          className='atm-machine__card-cvv'
          type='text'
          placeholder="CVV"
          value={cvv}
          onChange={handleCVVChange}
          />
        </div>
      </div>

      <button className="atm-machine__theme-button" onClick={handleThemeChange}>
        Change Theme
      </button>
    </div>
  );
};

export default ATMMachine;
