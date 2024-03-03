import { Component } from "react";
const styles = {
    bubbleAlert: {
        backgroundColor: '#e84328', 
        borderRadius: '15px',
        color: '#fff', 
        padding: '2px 10px',
        fontSize: '0.9rem',
        width:'20px'
        
    }
}

class BubbleAlert extends Component{
    render() {
        const {value}=this.props
        return (
            <span style={styles.bubbleAlert}>
                {value < 10 ? value: "+9"}
            </span>
        )
    }
}
export default BubbleAlert