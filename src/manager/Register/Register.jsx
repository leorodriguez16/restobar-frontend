import React from "react";
import { Formik } from "formik";
import { Container, imagen } from "../Login/login.styled";
import InputRegister from "./components/Input";
import { BtnRegister, ErrorReg, FormReg, GrupInput } from "./register.style";
import Header from "../Login/components/Header";

const erObj = {
  erName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  erPassword: /^.{4,12}$/, // 4 a 12 digitos.
  erEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //email obligario @
};

const Register = () => {
  return (
    <>
      <Header
        img={imagen}
        imgAlt="logo"
        h2="Registrarse"
        p="¿Ya tienes una cuenta?"
        link="Ingresar"
        path="/login"
      />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validate={(values) => {
          let errores = {};

          //validate name
          if (!values.name) {
            errores.name = "Por favor ingrese un nombre";
          } else if (!erObj.erName.test(values.name)) {
            errores.name = "El nombre no puede contener numeros";
          }
          //validate email
          if (!values.email) {
            errores.email = "Por favor ingresa un correo";
          }
          //validate password
          if (!values.password) {
            errores.password = "Por favor ingresa una contraseña";
          } else if (!erObj.erPassword.test(values.password)) {
            errores.password = "La contraseña tiene que ser de 4 a 12 digitos ";
          }
          // validate repeatPassword
          if (!values.repeatPassword) {
            errores.repeatPassword = "Por favor repita una contraseña";
          } else if (values.repeatPassword !== values.password) {
            errores.repeatPassword = "Las contraseñas no coinciden";
          }
          return errores;
        }}
      >
        {({
          values,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
        }) => (
          <Container>
            {
              <FormReg onSubmit={handleSubmit}>
                <GrupInput>
                  <InputRegister
                    id="name"
                    label="Nombre"
                    type="text"
                    nombre="name"
                    blur={handleBlur}
                    change={handleChange}
                    val={values.nombre}
                    placeholder="Ingrese su nombre"
                  />
                  {touched.name && errors.name && (
                    <ErrorReg>{errors.name}</ErrorReg>
                  )}
                </GrupInput>
                <GrupInput>
                  <InputRegister
                    id="email"
                    label="Correo"
                    type="email"
                    nombre="email"
                    blur={handleBlur}
                    change={handleChange}
                    val={values.email}
                    placeholder="Ingrese su correo"
                  />
                  {touched.email && errors.email && (
                    <ErrorReg>{errors.email}</ErrorReg>
                  )}
                </GrupInput>
                <GrupInput>
                  <InputRegister
                    id="password"
                    label="Contraseña"
                    type="password"
                    nombre="password"
                    blur={handleBlur}
                    change={handleChange}
                    val={values.password}
                    placeholder="Ingrese su contraseña"
                  />
                  {touched.password && errors.password && (
                    <ErrorReg>{errors.password}</ErrorReg>
                  )}
                </GrupInput>

                <GrupInput>
                  <InputRegister
                    id="repeatPassword"
                    label="Repetir contraseña"
                    type="password"
                    nombre="repeatPassword"
                    blur={handleBlur}
                    change={handleChange}
                    val={values.repeatPassword}
                    placeholder="Ingrese su contraseña"
                  />
                  {touched.repeatPassword && errors.repeatPassword && (
                    <ErrorReg>{errors.repeatPassword}</ErrorReg>
                  )}
                </GrupInput>

                <BtnRegister>Enviar</BtnRegister>
              </FormReg>
            }
          </Container>
        )}
      </Formik>
    </>
  );
};

export default Register;
