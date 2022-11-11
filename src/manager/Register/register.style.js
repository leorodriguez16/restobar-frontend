import styled from "@emotion/styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const FormReg = styled.form({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  minWidth: "600px",
  height: "maxHeight",
  marginTop: "25px",
  background: "#fff",
  borderRadius: "5px",
  padding: "25px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  "@media(max-width:880px)": {
    gridTemplateColumns: "1fr",
  },
});
export const LabelReg = styled.label({
  display: "flex",
  justifyContent: "flex-start",
  fontWeight: "600",
  fontSize: "16px",
  minHeight: "40px",
  padding: "5px",
  color: "#1f1f1f",
});
export const GrupInput = styled.div({
  position: "relative",
  zIndex: "90",
});

export const InputReg = styled.input((props) => ({
  fontFamily: "Roboto",
  width: "100%",
  border: props.valido ? "3px solid #e2e2e2" : "3px solid #e92b2d",
  fontSize: "16px",
  padding: "10px",
  margin: "5px",
  marginTop: "0",
  color: "#1f1f1f",
  borderRadius: "5px",
  height: "45px",
  lineHeight: "45px",
  "&:focus": {
    outline: "none",
    border: props.valido ? "3px solid #e92b2d" : "2px solid #0085FF",
  },
}));

export const IconValidation = styled(FontAwesomeIcon)({
  position: "absolute",
  right: "10px",
  bottom: "5px",
  top: "15px",
  zIndex: "100",
  fontSize: "16px",
  color: "green",
  // opacity: "0",
});
export const ErrorReg = styled.p((props) => ({
  display: "flex",
  justifyContent: "flex-start",
  marginLeft: "0.5rem",
  fontSize: "12px",
  color: "#e92b2d",
  fontWeight: "600",
  // display: props.valido && "none",
}));
export const BtnRegister = styled.button({
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
});
