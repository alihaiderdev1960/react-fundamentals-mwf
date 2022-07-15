import React from "react";
import PropTypes from "prop-types";

const Card = ({
  name,
  title,
  description,
  address: { city, country, pinCode },
}) => {
  //   const {
  //     name,
  //     title,
  //     description,
  //     address: { city, country, region, pinCode },
  //   } = props;
  //   console.log(props, "props");

  return (
    <div
      style={{ border: "1px solid red", padding: "1rem", marginBottom: "1rem" }}
    >
      <h2>{title}</h2>
      <h6>{description}</h6>
      <p>{name}</p>
      <ul>
        <li>City: {city}</li>
        <li>Country: {country}</li>
        <li>Pincode: {pinCode}</li>
      </ul>
    </div>
  );
};

Card.propTypes = {};

export default Card;
