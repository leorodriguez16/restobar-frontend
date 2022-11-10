import { Formik } from "formik";
import React from "react";
import {
  Container,
  Error,
  Button,
  DivInput,
  Form,
  Input,
  Labelr,
  Paragraph,
  Password,
  imagen,
  Logo,
  Pregister,
} from "./style/Login.style";
const Register = () => {
  const erUser = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          valPassword: "",
        }}
        validate={(values) => {
          let errores = {};
          // validacion name
          if (!values.name) {
            errores.name = "Por favor ingrese su nombre";
          } else if (!erUser.test(values.name)) {
            errores.name = "El nombre no puede contener numeros y o espacios";
          }
          if (!values.email) {
            errores.email = "Por favor ingresa un correo";
          }
          if (!values.password) {
            errores.password = "Por favor ingresa una contraseña";
          } else if (values.password.split("")) {
            errores.password = "Contraseña corta";
          }

          return errores;
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleBlur,
          touched,
        }) => (
          <Container>
            {
              <Form>
                <DivInput>
                  <Labelr>Nombre</Labelr>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Ingrese su nombre"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Input>
                </DivInput>
                {touched.name && errors.name && <Error>{errors.name}</Error>}
                <DivInput>
                  <Labelr htmlFor="email">Correo</Labelr>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Ingrese su email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Input>
                </DivInput>
                {touched.email && errors.email && <Error>{errors.email}</Error>}
                <DivInput>
                  <Labelr htmlFor="password">Contraseña</Labelr>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Ingrese su contraseña"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // cambiar type:email
                  ></Input>
                </DivInput>
                {touched.password && errors.password && (
                  <Error>{errors.password}</Error>
                )}
                <DivInput>
                  <Labelr htmlFor="password">Confirma contraseña</Labelr>
                  <Input
                    type="password"
                    name="valpassword"
                    placeholder="Ingrese su contraseña"
                    // cambiar type:email
                  ></Input>
                </DivInput>
                {touched.contraseña && errors.contraseña && (
                  <Error>{errors.contraseña}</Error>
                )}
                <Button>Enviar</Button>
              </Form>
            }
          </Container>
        )}
      </Formik>
    </>
  );
};

export default Register;
