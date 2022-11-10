import styled from "styled-components";
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
  padding: "20px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  "@media(max-width:880px)": {
    gridTemplateColumns: "1fr",
  },
});
export const LabelReg = styled.label({
  display: "flex",
  justifyContent: "flex-start",
  fontWeight: "600",
  fontSize: "14px",
  minHeight: "40px",
  padding: "5px",
  color: "#1f1f1f",
});
export const GrupInput = styled.div({
  position: "relative",
  zIndex: "90",
});
export const InputReg = styled.input({
  fontFamily: "Roboto",
  width: "100%",
  border: "2px solid #e2e2e2",
  fontSize: "18px",
  padding: "10px",
  margin: "5px",
  marginTop: "0",
  color: "#1f1f1f",
  borderRadius: "5px",
  height: "45px",
  lineHeight: "45px",
  "&:focus": {
    outline: "none",
    border: "2px solid #0085FF",
  },
});
export const IconValidation = styled(FontAwesomeIcon)({
  position: "absolute",
  right: "10px",
  bottom: "5px",
  top: "20px",
  zIndex: "100",
  fontSize: "16px",
  color: "green",
  opacity: "0",
});
