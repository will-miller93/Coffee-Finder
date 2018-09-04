import {Component} from 'react';
import {setIdToken, setAccessToken} from '../auth/auth';

class Callback extends Component {
    componentDidMount() {
        setAccessToken();
        setIdToken();
        window.location.href = '/dashboard';
    };

    render(){
        return null;
    };
};

export default Callback;