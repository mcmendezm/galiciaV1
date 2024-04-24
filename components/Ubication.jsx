import React, { Component } from 'react';

class Ubication extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    // Cargar el script de la API de Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_DE_API&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onload = this.initMap;
    document.body.appendChild(script);
  }

  initMap = () => {
    // Coordenadas de Risaralda, Caldas, Colombia
    const risaralda = { lat: 5.0739, lng: -75.5174 };
    // Crear el mapa
    const map = new window.google.maps.Map(this.mapRef.current, {
      zoom: 8,
      center: risaralda
    });
    // Marcador en Risaralda
    new window.google.maps.Marker({
      position: risaralda,
      map: map,
      title: 'Risaralda, Caldas, Colombia'
    });
  };

  render() {
    return <div ref={this.mapRef} style={{ width: '100%', height: '400px' }} />;
  }
}

export default Ubication;
