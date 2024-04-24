import { Component } from "react";
import Ubicacion from "./Ubicacion";
import Redes from "./Redes";

const styles = {
    footer: {
        height: '600px',
        backgroundImage: 'linear-gradient(to bottom, #2f303a66, #2f303a66), url(/img/footer.png)',
        backgroundSize: 'cover', 
        backgroundPosition: 'center bottom', 
        position: 'relative', 
    }
}

class Footer extends Component{
    render() {
        return (
            <section style={styles.footer}>
                {<div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                    <div>
                        <h3 id="ubicacion" style={{ color: '#fff', fontSize: '25px', paddingTop:'80px' }}>Ubicación:</h3>
                        <Ubicacion></Ubicacion>
                    </div>
                    <div>
                        <h3 id="redes" style={{ color: '#fff', fontSize: '25px', paddingTop: '80px' }}>Encuentranos en: </h3>
                        <Redes></Redes>
                    </div>
                </div>
                }
                        
                <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                    
                </div>
            </section>
        )
    }
}
export default Footer;

