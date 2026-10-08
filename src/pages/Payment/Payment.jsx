import React, { useState } from 'react';
import './Payment.css';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = () => {
    alert(`Payment method selected: ${paymentMethod}`);
    // Add logic to handle the payment submission
  };

  const renderPaymentDetails = () => {
    switch (paymentMethod) {
      case 'debitCard':
        return (
          <div className="payment-details">
            <h3>Enter Debit Card Details</h3>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Card Holder Name" />
            <input type="text" placeholder="Expiry Date (MM/YY)" />
            <input type="text" placeholder="CVV" />
          </div>
        );
      case 'creditCard':
        return (
          <div className="payment-details">
            <h3>Enter Credit Card Details</h3>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Card Holder Name" />
            <input type="text" placeholder="Expiry Date (MM/YY)" />
            <input type="text" placeholder="CVV" />
          </div>
        );
      case 'upi':
        return (
          <div className="payment-details">
            <h3>Enter UPI Details</h3>
            <input type="text" placeholder="UPI ID" />
          </div>
        );
      default:
        return <p>Please select a payment method.</p>;
    }
  };

  return (
    <div className="payment-page">
     
      <div className="payment-options">
        <h3>Select Payment Method</h3>
        <button type="button" onClick={() => setPaymentMethod('debitCard')}>
          Debit Card
        </button>
        <button type="button" onClick={() => setPaymentMethod('creditCard')}>
          Credit Card
        </button>
        <button type="button" onClick={() => setPaymentMethod('upi')}>
          UPI
        </button>
        {renderPaymentDetails()}
        {paymentMethod && (
          <button
            type="button"
            className="submit-payment"
            onClick={handleSubmit}
          >
            Submit Payment
          </button>
        )}
      </div>
    </div>
  );
};

export default Payment;
