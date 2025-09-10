const Banner = () => {

  return (
    <div className="banner">
      <a href="https://713bar.netlify.app/" target="_blank" rel="noopener noreferrer" className="banner-logo">
        <img src="/assets/images/713.jpg" alt="713 Bar Arcade Logo" />
      </a>
      <a href="https://www.pedidosya.com.ar/restaurantes/tandil/713-bar-b8269e18-3e30-4bdc-9109-8be22a384a76-menu" target="_blank" rel="noopener noreferrer">
        <img src="/assets/images/pedidosya.png" alt="Pedidos Ya Logo" />
      </a>
      <a href="https://www.youtube.com/@713bararcade" target="_blank" rel="noopener noreferrer" >
        <img src="/assets/images/youtube.png" alt="You Tube" className="banner-youtube" />
      </a>
      <a href="https://www.instagram.com/713tandil" target="_blank" rel="noopener noreferrer" >
        <img src="/assets/images/instagram.png" alt="Instagram" className="banner-instagram" />
      </a>
    </div >
  )
}
export default Banner;