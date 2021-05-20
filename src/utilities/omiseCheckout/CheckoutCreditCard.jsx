import React, { Component } from "react";
import Script from "react-load-script";

let OmiseCard;

export class CheckoutCreditCard extends Component {
  handleLoadScript = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: "pkey_test_5nwj8mjuck2ngl066zb",
      currenct: "thb",
      frameLabel: "Sportify",
      submitLabel: "UPGRADE YOUR ACCOUNT NOW",
      buttonLabel: "Pay with Omise",
    });
  };

  creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: [],
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };

  omiseCardHandler = () => {
    const { upgrade, createCreditCardCharge } = this.props;
    OmiseCard.open({
      frameDescription: "Invoice #3847",
      amount: 30000,
      onCreateTokenSuccess: (token) => {
        console.log(token);
      },
      onFormClosed: () => {},
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.creditCardConfigure();
    this.omiseCardHandler();
  };

  render() {
    return (
      <div>
        <Script
          url="https://cdn.omise.co/omise.js"
          onLoad={this.handleLoadScript}
        />
        <form>
          <button id="credit-card" type="button" onClick={this.handleClick}>
            Pay with Credit Card
          </button>
        </form>
      </div>
    );
  }
}

export default CheckoutCreditCard;
