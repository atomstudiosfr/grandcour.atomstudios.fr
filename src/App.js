import Carousel from "react-bootstrap/Carousel";

function App() {
    return (
        <Carousel style={{backgroundColor: "black", textAlign: 'center'}} slide={false}>
            <Carousel.Item style={{marginTop: "30vh", minHeight: "100vh"}}>
                    <img width={200} alt="logo" src="appartement/logo-white.png"/>
                    <p style={{fonts: "roboto"}} className="text-white">35 rue Joseph Bara - Apt 13</p>
                    <p className="text-white">37700 - SAINT-PIERRE-DES-CORPS</p>
            </Carousel.Item>
            <Carousel.Item><img alt="appartement-1" className="vh-100" src="appartement/1.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-2" className="vh-100" src="appartement/2.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-3" className="vh-100" src="appartement/3.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-4" className="vh-100" src="appartement/4.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/5.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/6.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/7.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/8.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/9.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/10.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/11.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/12.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/13.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/14.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/15.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/16.jpeg"/></Carousel.Item>
            <Carousel.Item><img alt="appartement-5" className="vh-100" src="appartement/17.jpeg"/></Carousel.Item>
        </Carousel>
    );
}

export default App;
