import React, { Component } from 'react';
import SenderAddress from './SenderAddress';
import ReceiverAddress from './ReceiverAddress';
import GetWeight from './GetWeight';
import GetShippingOption from './GetShippingOption';
import Confirm from './Confirm';
class Steps extends Component {
    render() {
        switch (this.props.currentStep) {
            case 1:
                return <SenderAddress
                    senderAddress={this.props.senderAddress}
                    senderNameChangeHandler={this.props.senderNameChangeHandler}
                    senderStreetChangeHandler={this.props.senderStreetChangeHandler}
                    senderZipChangeHandler={this.props.senderZipChangeHandler}
                />;
            case 2:
                return <ReceiverAddress
                    receiverAddress={this.props.receiverAddress}
                    receiverNameChangeHandler={this.props.receiverNameChangeHandler}
                    receiverStreetChangeHandler={this.props.receiverStreetChangeHandler}
                    receiverZipChangeHandler={this.props.receiverZipChangeHandler}
                />;
            case 3:
                return <GetWeight weight={this.props.weight}
                    weightChangeHandler={this.props.weightChangeHandler}
                />;
            case 4:
                return <GetShippingOption shippingOption={this.props.shippingOption}
                    shippingOptionChangeHandler={this.props.shippingOptionChangeHandler}
                />;
            case 5:
                return <Confirm data={this.props.state} />;
            default:
                return <SenderAddress />;
        }
    }
}

export default Steps;
