import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';
import {fetchLocSearch} from '../actions';
import { connect } from 'react-redux';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('submit', this.state.value);
        this.props.dispatch(fetchLocSearch(this.state.value));
    }

    render() {
        return (
            <div className={styles.search}>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

Search.propTypes = {
    dispatch: PropTypes.func
};

export default connect()(Search);
