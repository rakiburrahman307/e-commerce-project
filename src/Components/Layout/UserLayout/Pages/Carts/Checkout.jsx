// CheckoutForm.js
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

const CheckOut = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    shippingDetails: {
      address: '',
      city: '',
      postalCode: ''
    },
    paymentDetails: {
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }
  });
  
  // Simulated default shipping address
  const defaultShippingAddress = {
    address: '123 Main St',
    city: 'Anytown',
    postalCode: '12345'
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          defaultShippingAddress={defaultShippingAddress}
        />
      );
    case 2:
      return (
        <Step2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    default:
      return null;
  }
};

export default CheckOut;
