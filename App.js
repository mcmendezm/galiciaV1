import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Sections from './components/Sections'
import Container from './components/Container'
import Footer from './components/Footer'
import ImageCarousel from './components/ImageCarousel'
import History from './components/History'
import Ubicacion from './components/Ubicacion'

class App extends Component{
  state = {
    productos: [
      { name:'Café Molido 250g', price:15000, img:'/img/cafe250.jpeg'},
      { name: 'Café Molido 500g', price: 30000, img: '/img/cafe500.jpeg' },
      { name: 'Café en Grano 250g', price: 15000, img: '/img/cafe250.jpeg' },
      { name:'Café en Grano 500g', price:30000, img:'/img/cafe500.jpeg'},
    ],
    carro: [],
    esCarroVisible:false,
  }
  images = [
    "/img/carrusel/img1.jpeg",
    "/img/carrusel/img2.jpeg",
    "/img/carrusel/img3.jpeg",
    "/img/carrusel/img5.jpeg",
    "/img/carrusel/img4.jpeg",
    "/img/carrusel/img6.jpeg",
  
  ];
  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
      return this.setState({carro:newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad:1,
      })
    })
  }
  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }
    this.setState({esCarroVisible:!this.state.esCarroVisible})
  }
  
  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <Navbar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro } />
        <Sections />
        <Container/>
        <Layout>
          <Title id="historia">- - - - - - - - - - - - Nuestra historia - - - - - - - - - - - - </Title>
          <div style={{ display: 'flex', justifyContent:'center', alignItems:'center'}}>
          <ImageCarousel images={this.images} />
          <History></History>
          </div>
        <Title id="productos">- - - - - - - - - - Nuestros producto - - - - - - - - - - -</Title>
        <Productos
          agregarAlCarro={this.agregarAlCarro}
          productos={this.state.productos}
            />
          
        </Layout>
        <Footer>

        </Footer>
      </div>

    )
  }
}

export default App;
