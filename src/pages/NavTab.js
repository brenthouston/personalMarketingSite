import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/index.css"

export default function NavTab(currentPage) {
    return(
        <div className="container">
        <ul className="nav ">
        <li className="BH" style={{color:"rgb(194, 194, 194)"}}>
            BRENT
         </li>
        <li className="BH" style={{color:"rgb(87, 87, 87)"}}>
            HOUSTON
         </li>
        <li className="nav-item ">
          <NavLink
            className={
              currentPage === "About Me" ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
            to="/Illustration"
          >
            Illustration
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
            to="/DigitalIllustration"
          >
            Digital Illustration
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            to="/ProductDesign"
          >
            Product Design
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            to="/Branding"
          >
            Branding
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            to="/Typography"
          >
            Typography
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            to="/Signage"
          >
            Signage
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            to="/OilPainting"
          >
            Oil Painting
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            to="/Clients"
          >
            Clients
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            to="/Contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
        </div>
    )
}