import "./index.css"

const AboutSection = () => {
  return (
    <section className="about">
    <div className="container">
    <h3>Welcome to Knights Academy</h3>
      <h1>About Us</h1>
      <div className="flex">
      <div className="about-img">
        <img src="./images/Rectangle 27.png" alt="" />
      </div>
        <div className="about-content">
      
      <h2>Where we come from</h2>
      <p>Based in Farnborough, Hampshire, The Rushmoor Knights Academy is an organisation dedicated to helping young players advance their skills and improve their game, while raising the standard of youth football in the UK. The team of qualified coaches have over thirty years combined experience of playing and working within the sport.</p>
      </div>
      
      </div>
      <div className="mission">
        <h2>Mission Statement</h2>
      </div>
      </div>
      </section>
  )
}

export default AboutSection