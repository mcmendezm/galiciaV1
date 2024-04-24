import { Component } from "react";
const styles = {
    history: {
        width: '50%',
        padding: '0 20px',
        fontFamily: 'Arial',
    
        
    }
}

class History extends Component{
    render() {
        return (
            <div style={styles.history}>
                <p>En 1964, nuestros visionarios abuelos Libardo García y Alicia Ramírez se hicieron con la posesión de una maravillosa finca, a la que llamaron La Galicia, un nombre que porta con orgullo la G de García y el cariño de Alicia. Ubicada en la prestigiosa región cafetera de Risaralda, Caldas, Colombia. Aquí, soñaron y cultivaron el mejor café, con el amor y la dedicación de un par de verdaderos apasionados. Guillermo León García, su hijo, heredó el mismo amor y pasión por el cultivo del café. Siguiendo en los pasos de sus padres, llevó adelante la tradición de respeto por la naturaleza y la familia en su manejo de la finca, manteniendo vivo el legado familiar. En nuestros tiempos, La Galicia dio lugar a nuestra marca de café, "Herencia La Galicia", en honor a Libardo, a Alicia y a su querida finca La Galicia.</p>
                <p>Hoy, Guillermo, convertido en abuelo, comparte el amor y los secretos del café con las nuevas generaciones. 


Herencia La Galicia es una marca que vive y respira la tradición en cada grano, portando con orgullo la historia familiar de respeto, amor y devoción por el café de calidad.</p>
            </div>
        )
    }
}
export default History