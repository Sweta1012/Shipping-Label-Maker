import React, { Component } from 'react';

class Confirm extends Component {
    render() {
        const { senderAddress, receiverAddress, weight, shippingOption } = this.props.data;
        return (
            <div className="Confirm">
                <div className=''>
                    <div> <strong>Sender Details</strong></div>
                    <div>Sender name: {senderAddress.name} </div>
                    <div>Sender Street: {senderAddress.street} </div>
                    <div>Sender zip: {senderAddress.zip} </div>
                    <div> <strong>Receiver Details</strong></div>
                    <div>Sender name: {receiverAddress.name} </div>
                    <div>Sender Street: {receiverAddress.street} </div>
                    <div>Sender zip: {receiverAddress.zip} </div>
                    <div>
                        <strong>Weight: {weight}</strong>
                    </div>
                    <div>
                        <strong>Shipping-option: {shippingOption}</strong>
                    </div>
                </div>
            </div>
        );
    }
}

export default Confirm;
