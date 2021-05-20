import axios from "axios";
import React, { Component } from "react";

import CheckoutCreditCard from "../../utilities/omiseCheckout/CheckoutCreditCard";

export class CheckoutPage extends Component {
  createCreditCardCharge = async (id, firstName, token) => {
    await axios({
      method: "post",
      url: "http://localhost:8000/checkout-credit-card",
      data: {
        id,
        firstName,
        token,
      },
    });
  };
  render() {
    const { upgrade } = this.props;

    return (
      <div className="own-form">
        <div>
          <h3>Total Amount: 300 THB </h3>
          <h3>
            <span>
              {/* {" "}
              {new Intl.NumberFormat().format(upgrade.amount / 100)} thb */}
            </span>
          </h3>
        </div>
        <CheckoutCreditCard
          upgrade={upgrade}
          createCreditCardCharge={this.createCreditCardCharge}
        />
        {/* <CheckoutInternetBanking upgrade={upgrade} /> */}
        {/* <div className="message">
          {charge && (
            <div>
              <h4>Thank you for your payment with credit card.</h4>
              <p>
                Your payment amount is{" "}
                <span className="amount">{new Intl.NumberFormat().format(charge.amount)} Baht</span>, status:{" "}
                <span
                  className={
                    charge.status === "successful"
                      ? "success"
                      : charge.status === "failed"
                      ? "failed"
                      : "pending"
                  }
                >
                  {charge.status}
                </span>
              </p>
            </div>
          )}
        </div> */}
      </div>
    );
  }
}

export default CheckoutPage;
