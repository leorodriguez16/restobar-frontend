import React from "react";
import { DivInput } from "../../Login/login.styled";
import { GrupInput, InputReg, LabelReg } from "../register.style";

const Input = ({ label, nombre, placeholder, type, id, change, blur, val }) => {
  return (
    <>
      <DivInput>
        <LabelReg htmlFor={nombre}>{label}</LabelReg>

        <InputReg
          id={id}
          type={type}
          name={nombre}
          onBlur={blur}
          onChange={change}
          value={val}
          placeholder={placeholder}
        ></InputReg>
      </DivInput>
    </>
  );
};

export default Input;
