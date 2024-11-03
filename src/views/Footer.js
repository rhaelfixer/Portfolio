import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";


// Context
import { useDate } from "../components/DateContext";


// CSS
import "./styles/Footer.css";


const Footer = () => {
  const { isNewYear, isSummer, isHalloween, isChristmas } = useDate();
  const [textColor, setTextColor] = useState("");

  // Define the container class based on your conditions
  let footer = "footer-container-CSS";
  if (isNewYear) {
    footer += " newYear";
  } else if (isSummer) {
    footer += " summer";
  } else if (isHalloween) {
    footer += " halloween";
  } else if (isChristmas) {
    footer += " christmas";
  }


  useEffect(() => {
    // Select the container element with the specified class
    const containerElement = document.querySelector(
      `.${footer.replace(/\s/g, ".")}`
    );

    // Get the computed style of the container element
    const computedStyle = window.getComputedStyle(containerElement);

    // Get the background color in RGB format from computed styles
    const backgroundColor = computedStyle.backgroundColor;

    // Convert RGB to hex format for easier manipulation
    function rgbToHex(rgb) {
      const [r, g, b] = rgb.match(/\d+/g);
      return `#${Number(r).toString(16).padStart(2, "0")}${Number(g)
        .toString(16)
        .padStart(2, "0")}${Number(b).toString(16).padStart(2, "0")}`;
    }

    // Convert the background color to hex format
    const hexBackgroundColor = rgbToHex(backgroundColor);

    // Extract individual color channels (red, green, blue)
    const r = parseInt(hexBackgroundColor.substring(1, 3), 16);
    const g = parseInt(hexBackgroundColor.substring(3, 5), 16);
    const b = parseInt(hexBackgroundColor.substring(5, 7), 16);

    // Calculate the relative luminance (brightness) of the color
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Determine the text color on luminance
    // In this case, if luminance is greater than 0.5, set to "footer-black-CSS", otherwise set to "footer-white-CSS"
    const newTextColor =
      luminance > 0.5 ? "footer-black-CSS" : "footer-white-CSS";

    // Set the text color based on the luminance
    setTextColor(newTextColor);
  }, [footer]);


  return (
    <>
      <Container className={footer} fluid>
        <p className={`footer-p-CSS ${textColor}`}>
          Copyright &#169; {new Date().getFullYear()} Rhael Fixer. All rights
          reserved.
        </p>
      </Container>
    </>
  );
};

export default Footer;
