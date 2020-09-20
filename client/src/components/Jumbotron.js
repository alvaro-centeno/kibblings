import React from "react";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";

export const Jumbotron = (props) => {
  return (
    <MDBContainer className="mt-5 text-center" fluid>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="text-center bodies">
            <MDBCardTitle className="card-title h4 pb-2">
              <strong>{props.jumbotronTitle}</strong>
            </MDBCardTitle>

            <MDBCardImage
              src="https://www.cesarsway.com/wp-content/uploads/2018/05/allergies_0.jpg"
              className="img-fluid"
            />
            <MDBCardBody>
              <MDBCardTitle className="indigo-text h5 m-4">
                Photography
              </MDBCardTitle>
              <MDBCardText>{props.jumbotronText}</MDBCardText>

              <MDBCol className="d-flex justify-content-center mt-4" md="12">
                <MDBCol
                  md="3"
                  className="d-flex justify-content-around"
                ></MDBCol>
              </MDBCol>
            </MDBCardBody>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export const BannerTron = (props) => {
  return (
    <MDBJumbotron style={{ padding: "0", width: "100%" }}>
      <MDBCol
        className="text-white text-center py-1 px-4"
        style={{
          backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <MDBCardTitle
          className="h1-responsive m-5 font-bold"
          style={{ fontSize: "85px" }}
        >
          {props.Title}
        </MDBCardTitle>
      </MDBCol>
    </MDBJumbotron>
  );
};
