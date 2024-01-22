import"./index.css"

const Featured = () => {
  return (
    <section className="featured">
        <div className="container">
            <div className="feature-content">
                <h2>Featured Players</h2>
                <p>An organisation dedicated to linking UK American footballers with recruiters around the world. Through teaching game & positional fundamentals to personal development players can expect to compete to be best.</p>
            </div>
            <div className="flex-feature">
                <div className="col-content">
                    <div className="col">
                        <h3>Josh Lockwood</h3>
                        <h4>Height:</h4>
                        <h4><span>Weight</span> </h4>
                        <div className="col-img">
                        <img src="./images/Rectangle 42.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-content2">
                    <p>Josh has been playing for the Rushmoor Knights since October 2019. Since then he’s played 2 seasons for the U16’s as a quarterback, winning a national championship and national MVP. More recently he has played his first season of U19 in Division 1. He has also represented GB U17 as special teams captain and back up QB against Austria.
                    My aim is to make it to the USA and play college football once I’ve finished my A-levels.</p>
                </div>
                

                
            </div>
            <div className="flex2-feature">
                <div className="col-content">
                    <div className="col">
                        <h3>Tom Conway</h3>
                        <h4>Height:</h4>
                        <h4><span>Weight</span> </h4>
                        <div className="col-img">
                        <img src="./images/Rectangle 40.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-content2">
                    <p>Tom has been playing for the Knights for 2 years and has recently graduated from the the U16 to U19’s. In the U16 Tom has shown his technical ability and drive to become the number 1 centre in the country. Also playing NT Tom has been a producer on and off the field leading and motivating the team as a captain. With starting positions with Great Britain Lions U17 in 2022 (Austria) and now again for Norway in 2023.</p>
                </div>
                

                
            </div>
            <div className="flex3-feature">
                <div className="col-content">
                    <div className="col">
                        <h3>Jack Sheard</h3>
                        <h4>Height:</h4>
                        <h4><span>Weight</span> </h4>
                        <div className="col-img">
                        <img src="./images/Rectangle 35.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-content2">
                    <p>Jack Sheard, has been playing for the Rushmoor Knights for the last 3 years. In the U16 Jack had Played on both sides of the ball dominantly and was instrumental in the national finals in 2022. Continuing into the under 19’s team jack continues to dominate on both sides of the ball being a top scorer as wide receiver and the least amount of catches as a cornerback. His althletism means that teams have flexibility and has a team first attitude.
                    Future aspirations are to play at college level and above in the USA.</p>
                </div>
                

                
            </div>
        </div>
    </section>
  )
}

export default Featured