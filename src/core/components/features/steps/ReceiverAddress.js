import React, { Component } from 'react';

class ReceiverAddress extends Component {
    constructor(props) {
        super(props);
        this.receiverNameChangeHandler = this.receiverNameChangeHandler.bind(this);
        this.receiverStreetChangeHandler = this.receiverStreetChangeHandler.bind(this);
        this.receiverZipChangeHandler = this.receiverZipChangeHandler.bind(this);
    }
    receiverNameChangeHandler(event) {
        this.props.receiverNameChangeHandler(event.target.value);
    }
    receiverStreetChangeHandler(event) {
        this.props.receiverStreetChangeHandler(event.target.value);
    }
    receiverZipChangeHandler(event) {
        this.props.receiverZipChangeHandler(event.target.value);
    }
    render() {
        const { receiverAddress } = this.props;
        return (
            <div className="receiver-address">
                <h3 className="">Enter the Receiver's address</h3>
                <div className="form-inline">
                    <div className="col-sm-12 row">
                        <label className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-10">
                            <input type='text' name='name' className="form-control-plaintext form-control-input" value={receiverAddress.name} onChange={this.receiverNameChangeHandler} />
                        </div>

                    </div>
                    <div className="col-sm-12 row">
                        <label className="col-sm-2 col-form-label">Street:</label>
                        <div className="col-sm-10">
                            <input type='text' name='street' className="form-control-plaintext form-control-input" value={receiverAddress.street} onChange={this.receiverStreetChangeHandler} />
                        </div>
                    </div>

                    {/* <div className='city'>
                <input type='text' name='city' value={this.state.city} onChange={this.cityChangeHandler}/>
            </div>
            <div className='state'>
                <input type='text' name='name' value={this.state.name} onChange={this.nameChangeHandler}/>
            </div> */}
                    <div className="col-sm-12 row">
                        <label className="col-sm-2 col-form-label">Zip:</label>
                        <div className="col-sm-10">
                            <input type='text' name='zip' className="form-control-plaintext form-control-input"
                                value={receiverAddress.zip} onChange={this.receiverZipChangeHandler} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default ReceiverAddress;
