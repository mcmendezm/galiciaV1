import { Component } from "react";
const styles = {
    ubicacion: {
        height: '250px',
        
    }
}

class Ubicacion extends Component{
    render() {
        return (
            <div>
                <img style={styles.ubicacion} src="/img/risaralda.png" alt="mapa" /> 
            </div>
        )
    }
}
export default Ubicacion