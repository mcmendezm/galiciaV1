import { Component } from "react";
const styles = {
    title: {
        color: '#3e2623',
        marginBottom: '30px',
        fontFamily: '"Protest Revolution", sans-serif',
        paddingTop:'150px',
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px'
    }
}

class Title extends Component{
    render() {
        const { id } = this.props;
        return (
            
            <div style={styles.box}>
                <h2 id={id} style={styles.title}>{this.props.children}</h2>  
            </div>
        )
    }
}
export default Title