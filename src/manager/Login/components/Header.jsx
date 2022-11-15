import React from "react";
import { Link } from "react-router-dom";
import { Logo, Paragraph, Pregister } from "../login.styled";

const Header = ({ img, imgAlt, h2, p, link, path }) => {
  return (
    <div>
      {" "}
      <div>
        <Logo src={img} alt={imgAlt} />
        <h2>{h2}</h2>
        <Paragraph>
          {p}
          <strong>
            <Pregister>
              <Link to={path}>{link}</Link>
            </Pregister>
          </strong>
        </Paragraph>
      </div>
    </div>
  );
};

export default Header;
