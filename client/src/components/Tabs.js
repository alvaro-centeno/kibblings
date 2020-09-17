import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { ModalCenter } from "../components/Modal";

export class TabsDefault extends Component {
  state = {
    activeItem: "1",
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "1"}
              onClick={this.toggle("1")}
              role="tab"
            >
              <div style={{ color: "black" }}> Description</div>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "2"}
              onClick={this.toggle("2")}
              role="tab"
            >
              <div style={{ color: "black" }}>Vaccines</div>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={this.state.activeItem === "3"}
              onClick={this.toggle("3")}
              role="tab"
            >
              <div style={{ color: "black" }}>Allergies</div>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem}>
          <MDBTabPane tabId="1" role="tabpanel">
            <br />
            <p className="mt-2">{this.props.age}</p>
            <p className="mt-2">{this.props.birthday}</p>
            <p className="mt-2">{this.props.weight}</p>
            <p className="mt-2">{this.props.breed}</p>
            <p className="mt-2">{this.props.gender}</p>
            <p className="mt-2">{this.props.color}</p>
            <p className="mt-2">{this.props.microchip}</p>
            <p className="mt-2">{this.props.rabies}</p>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <br />
            <p className="mt-2">{this.props.vaccines}</p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <br />
            <p className="mt-2">{this.props.diet}</p>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
