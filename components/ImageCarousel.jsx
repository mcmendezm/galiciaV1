import React, { Component } from "react";

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      images: props.images,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.nextImage, 2000); // Cambia la imagen cada 2 segundos
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextImage = () => {
    const { currentImageIndex, images } = this.state;
    const nextIndex = (currentImageIndex + 1) % images.length;
    this.setState({ currentImageIndex: nextIndex });
  };

  render() {
    const { currentImageIndex, images } = this.state;
    return (
      <div style={{ display: "flex", justifyContent: "center", width:"50%"}}>
        <img
          src={images[currentImageIndex]}
          alt="carousel"
          style={{ maxWidth: "100%", maxHeight: "400px" }}
        />
      </div>
    );
  }
}

export default ImageCarousel;
