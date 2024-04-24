import { Component } from "react";
const styles = {
    logo: {
        width: '150px',
        
    }
}

class Logo extends Component{
    render() {
        return (
            <div>
                <img style={styles.logo} src="/img/logo.png" alt="Logo de herencia la galicia" /> 
            </div>
        )
    }
}
export default Logo