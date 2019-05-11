import React, { Component } from 'react';

class GetShippingOption extends Component {
    constructor(props) {
        super(props);
        this.shippingOptionChangeHandler = this.shippingOptionChangeHandler.bind(this);
    };
    shippingOptionChangeHandler(event) {
        this.props.shippingOptionChangeHandler(event.target.value);
    }
    render() {
        const { shippingOption } = this.props;
        return (
            <div className="shipping-option">
            
                <div className="col-sm-12 row">
                    <label className="col-sm-4 col-form-label">shipping option</label>
                    <div className="col-sm-6">
                        <input type='text' name='shippingoption'
                            className="form-control-plaintext form-control-input"
                            value={shippingOption}
                            onChange={this.shippingOptionChangeHandler} />
                    </div>
                </div>
            </div>
        );
    }
}

export default GetShippingOption;
