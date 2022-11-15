import React from "react";
import { Container, Form, Label } from "../Login/login.styled";
import { InputPassword, LabelPassword } from "./style";

const Password = () => {
  return (
    <>
      {" "}
      <Container>
        <Form>
          <div>
            <h2>Enviamos un codigo de verificacion a tu correo electronico</h2>
            <p></p>
          </div>
          <div>
            <LabelPassword htmlFor="verificationCode">
              Ingresa el codigo de verificacion
            </LabelPassword>
            <InputPassword placeHolder />
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Password;
