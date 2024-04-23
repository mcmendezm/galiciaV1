import { Component } from "react";
const styles = {
    button: {
        backgroundColor: '#e84328', 
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontFamily: '"Protest Riot", sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
    }
}

class Button extends Component {
    render() { 
        return (
            <button style={styles.button}{...this.props}></button>
        )
    }
}
export default Button