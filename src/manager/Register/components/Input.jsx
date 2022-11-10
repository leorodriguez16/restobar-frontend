import React from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { DivInput } from "../../Login/login.styled";
import {
  GrupInput,
  IconValidation,
  InputReg,
  LabelReg,
} from "../register.style";

const Input = ({ label }) => {
  return (
    <>
      <DivInput>
        <LabelReg>{label}</LabelReg>
        <GrupInput>
          <InputReg
            type="text"
            name="name"
            placeholder="Ingrese su nombre"
          ></InputReg>
          <IconValidation icon={faCheckCircle} />
        </GrupInput>
      </DivInput>
    </>
  );
};

export default Input;
