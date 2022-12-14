import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const colors = {
  primary: "#005aff",
  second: "#fff",
  third: "#1f1f1f",
};
export const Container = styled.div({
  maxHeight: "100vh",
  display: "flex",
  alignItems: "flexStart",
  justifyContent: "center",
});
export const Form = styled.form({
  minWidth: "600px",
  marginTop: "25px",
  background: colors.second,
  borderRadius: "5px",
  padding: "20px",
  boxShadow: "0 20px 64px -1px rgb(0 0 0 / 53%)",
});
export const DivInput = styled.div({
  marginBottom: "20px",
});
export const Label = styled.label({
  display: "block",
  fontWeight: "600",
  fontSize: "14px",
  marginBottom: "5px",
  color: colors.third,
});

export const Input = styled.input({
  fontFamily: "Roboto",
  width: "100%",
  borderRadius: "5px",
  border: "2px solid #e2e2e2",
  fontSize: "18px",
  padding: "10px",
  margin: "5px",
  color: colors.third,
  "&:focus": {
    outline: "none",
    border: "2px solid #0085FF",
  },
});
export const Button = styled.button({
  display: "block",
  background: "#0085FF",
  fontWeight: "600",
  fontFamily: "Roboto",
  border: "none",
  cursor: "pointer",
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  "&:focus": {
    backgroundColor: "#0051ff",
  },
  "&:hover": {
    backgroundColor: "#005aff",
  },
});
export const Error = styled.div({
  display: "flex",
  justifyContent: "flex-start",
  color: "#e92b2d",
  fontWeight: "600",
  fontSize: "12px",
  margin: "0.5rem",
  marginTop: "-1.5rem",
});
export const Paragraph = styled.p({
  display: "block",
  fontWeight: "40",
  fontSize: "17px",
  margin: "0.5rem",
  marginBottom: "-1rem",
  color: "#1f1f1f",
});
export const Password = styled.strong({
  display: "flex",
  justifyContent: "flex-end",
  fontWeight: "40",
  fontSize: "1rem",
  margin: "1rem",
  color: "#2b6cb0",
  textDecoration: "underline",
  cursor: "pointer",
});
export const Logo = styled.img({
  width: "10rem",
  height: "10rem",
  borderRadius: "50%",
  margin: "1rem",
  boxShadow: "0 6px 36px -20px rgb(0 0 0 / 80%)",
});
export const Pregister = styled(Password)({
  display: "inline-block",
  fontWeight: "50",
  fontSize: "1,5rem",
  margin: "0.5rem",
  color: "#005aff",
  "&:hover": {
    color: "#0085FF",
    cursor: "pointer",
  },
});
export const DivInputIcon = styled.div({
  position: "relative",
  zIndex: "90",
});
export const IconEye = styled(FontAwesomeIcon)({
  position: "absolute",
  right: "10px",
  bottom: "19px",
  zIndex: "100",
  fontSize: "18px",
  marginLeft: "1px",
  color: "#005aff",
  "&:hover": {
    color: "#0085FF",
    cursor: "pointer",
  },
});
export const imagen = logo;
