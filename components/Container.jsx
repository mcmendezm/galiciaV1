import { Component } from "react";
const styles = {
    container: {
        color: 'white',
        backgroundColor: '#2f303a',
        textAlign: 'center',
        letterSpacing: '0.06em',
        fontWeight: 900,
        lineHeight: 1.364,
        height: '600px',
        marginLeft: '-4px',
        marginTop: 0,
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
        backgroundImage: 'linear-gradient(to bottom, #2f303a66, #2f303a66), url(/img/finca.jpeg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    titleText: {
        color: '#fff',
        textAlign: 'left',
        fontFamily: '"Protest Revolution", sans-serif', 
        fontWeight: 400, 
        fontStyle: 'normal', 
        fontSize: '80px',
    },
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
        transition: 'transform 0.3s ease', 
    },
    buttonHover: {
        transform: 'scale(1.16)', 
    },
}

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    render() {
        const { isHovered } = this.state;
        return (
            <section style={styles.container}>
                <h1 style={styles.titleText}>HERENCIA LA GALICIA</h1>
                <button
                    style={{ ...styles.button, ...(isHovered && styles.buttonHover) }}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    Solicitar una cotización
                </button>
            </section>
        );
    }
}

export default Container;
