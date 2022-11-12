import styled from "@emotion/styled";
export const FormReg = styled.form({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  minWidth: "600px",
  maxWidth: "600px",
  marginTop: "25px",
  background: "#fff",
  borderRadius: "5px",
  padding: "25px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  "@media(max-width:880px)": {
    gridTemplateColumns: "1fr",
    maxWidth: "500",
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
  border: "3px solid #e2e2e2",
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
    border:
      props.valido === "false" ? "3px solid #e92b2d" : "2px solid #0085FF",
  },
}));
export const ErrorReg = styled.p({
  display: "flex",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  color: "#e92b2d",
  fontWeight: "600",
  fontSize: "12px",
  margin: " -1.1rem 0.5rem 0.5rem  0rem",
});

export const BtnRegister = styled.button({
  display: "inline-block",
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
  gridColumn: "1/3",
  "&:focus": {
    backgroundColor: "#0051ff",
  },
});
