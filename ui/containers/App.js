import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import { Button } from 'semantic-ui-react';
import { setMessage } from '../actions/message';
import { Link } from 'react-router-dom';
class App extends Component {
    _onChange = (value) => {
        this.props.dispatch(setMessage(value))
    }
    render () {
        const {message} = this.props.messageReducer;
        return (
         <div>   <InputPreview value = {message} 
            onChange={this._onChange}/>
            <Link to='/about'>
        <Button>About</Button>
</Link>
        </div>
    )
    }
}

export default connect(state => state)(App);