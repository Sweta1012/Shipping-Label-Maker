import React, { Component } from 'react';

class Weight extends Component {
    constructor(props) {
        super(props);
        this.weightChangeHandler = this.weightChangeHandler.bind(this);
    };
    weightChangeHandler(event) {
        this.props.weightChangeHandler(event.target.value);
    }
    render() {
        const { weight } = this.props;
        return (
            <div className="weight">
                
                <div className="col-sm-12 row">
                    <label className="col-sm-2 col-form-label">weight</label>
                    <div className="col-sm-10">
                        <input type='text' name='weight'
                            className="form-control-plaintext form-control-input"
                            value={weight}
                            onChange={this.weightChangeHandler} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Weight;
