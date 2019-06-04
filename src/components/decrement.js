import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './decrement.css';

class Decrement extends Component {

    constructor(props) {

        super(props);

        this.state = {

            counter: 10
        };
    }

    handleOnClick = () => {

        this.setState ({

            counter: this.state.counter - 1

        });
    }

    displayCounter = () => {

        if(this.state.counter < 0) {

            return ("Cannot be less than zero");
        }
        else {

            return (this.state.counter);
        }
    }

    render() {

        return (

            <div className="decrement">
                <h1> {this.displayCounter()} </h1> <br/>
                <button onClick={this.handleOnClick}> Decrement </button>
            </div>
        );
    }

};

Decrement.propTypes = {

    counter: PropTypes.number.isRequired
}

export default Decrement;
