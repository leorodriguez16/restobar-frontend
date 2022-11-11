import React from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { DivInput } from "../../Login/login.styled";
import {
  ErrorReg,
  GrupInput,
  IconValidation,
  InputReg,
  LabelReg,
} from "../register.style";

const Input = ({
  label,
  error,
  name,
  placeholder,
  type,
  state,
  changeStatus,
  er,
}) => {
  const handleChange = (e) => {
    changeStatus({ ...state, campo: e.target.value });
  };
  const handleKeyUp = () => {
    if (er) {
      if (er.test(state.campo)) {
        changeStatus({ ...state, valido: "true" });
        console.log("true");
      } else {
        changeStatus({ ...state, valido: "false" });
        console.log("false");
      }
    }
  };
  const handleBlur = () => {};
  return (
    <>
      <DivInput>
        <LabelReg htmlFor={name}>{label}</LabelReg>
        <GrupInput>
          <InputReg
            type={type}
            name={name}
            placeholder={placeholder}
            value={state.campo}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            onBlur={handleBlur}
            valido={state.valido}
          ></InputReg>
          {state && <IconValidation icon={faCheckCircle} />}
        </GrupInput>
        <ErrorReg>{error}</ErrorReg>
      </DivInput>
    </>
  );
};

export default Input;
