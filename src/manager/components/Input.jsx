import React from "react";
import { DivInput } from "../Login/login.styled";
import { InputReg, LabelReg } from "../Register/register.style";

const Input = ({
  icon,
  label,
  nombre,
  placeholder,
  type,
  id,
  change,
  blur,
  val,
}) => {
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
        />
      </DivInput>
    </>
  );
};

export default Input;
