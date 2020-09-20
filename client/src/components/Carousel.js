import React from "react";
import { Carousel } from "react-bootstrap";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
import LandingVideo from "./Images/FrenchBulldogLanding2.mp4";
import LandingVideo2 from "./Images/PlaceHolder1920x1080.mp4";
import LandingVideo3 from "./Images/CatLanding2.mp4";

//This testing has solved previous children issue, now using MDB
//Remove MBD Container for HUGE Carousel
export const Carousels = ({ children }) => {
  return (
    // <MDBContainer style={{ paddingTop: "30px" }}>
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={false}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>{children}</MDBCarouselInner>
    </MDBCarousel>
    // </MDBContainer>
  );
};

export const CarouselItems = () => {
  return (
    <>
      <MDBCarouselItem itemId="1">
        <MDBView>
          <video autoPlay loop muted className="d-block w-100">
            <source src={LandingVideo} type="video/mp4"></source>
          </video>
        </MDBView>
      </MDBCarouselItem>
      <MDBCarouselItem itemId="2">
        <MDBView>
          <video autoPlay loop muted className="d-block w-100">
            <source src={LandingVideo3} type="video/mp4"></source>
          </video>
        </MDBView>
      </MDBCarouselItem>
      <MDBCarouselItem itemId="3">
        <MDBView>
          <video autoPlay loop muted className="d-block w-100">
            <source src={LandingVideo2} type="video/mp4"></source>
          </video>
          <MDBMask overlay="black-slight" />
        </MDBView>
      </MDBCarouselItem>
    </>
  );
};

//The child Testing Here may work using MDB. Double Check logic with Mykhas for Confirmation of logistics
//Or Rerun after potential post-confirmation Errors

// export const ChildTest = ({ children }) => {
//     return (

//     )
// }

// export const Child = () => {
//     return (

//     )
// }

export const AdoptionCarousel = ({ image, petName, description }) => {
  return (
    <MDBContainer className="mt-3">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={image} alt="First slide" />
              <MDBCarouselCaption>
                <h2>{petName}</h2>
                <p>{description}</p>
              </MDBCarouselCaption>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};
