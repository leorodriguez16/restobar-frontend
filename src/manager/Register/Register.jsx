import React, { useState } from "react";
import { Container } from "../Login/login.styled";
import InputRegister from "./components/Input";
import { BtnRegister, FormReg } from "./register.style";

const erObj = {
  erName: /^[a-zA-ZÀ-ÿ\s]{4,16}$/, // Letras y espacios, pueden llevar acentos.
  erPassword: /^.{4,12}$/, // 4 a 12 digitos.
  erEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //email obligario @
};

const Register = () => {
  const [userName, setuserName] = useState({ campo: "", valido: true });
  const [email, setEmail] = useState({ campo: "", valido: true });
  const [passwordOne, setPasswordOne] = useState({ campo: "", valido: true });
  const [passwordTwo, setPasswordTwo] = useState({ campo: "", valido: true });

  return (
    <>
      <Container>
        <FormReg>
          <InputRegister
            state={userName}
            changeStatus={setuserName}
            label="Nombre"
            type="email"
            name="email"
            placeholder="Ingrese su email"
            error="Por favor ingrese un valor"
            er={erObj.erName}
          />
          <InputRegister
            state={email}
            changeStatus={setEmail}
            label="Correo"
            type="email"
            name="email"
            placeholder="Ingrese su correo"
            error="Por favor ingrese un correo"
            er={erObj.erEmail}
          />
          <InputRegister
            state={passwordOne}
            changeStatus={setPasswordOne}
            label="Contraseña"
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            error="Por favor ingrese su contraseña"
            er={erObj.erPassword}
          />
          <InputRegister
            state={passwordTwo}
            changeStatus={setPasswordTwo}
            label="Repetir contraseña"
            type="email"
            name="email"
            placeholder="Ingrese su correo"
            error="Las contraseñas no coinciden"
          />
          <BtnRegister>Enviar</BtnRegister>
        </FormReg>
      </Container>
    </>
  );
};

export default Register;
