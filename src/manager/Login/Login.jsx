import React, { useState } from "react";
import { Formik } from "formik";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Register from "../Register/Register";
import {
  Container,
  Error,
  Button,
  DivInput,
  Form,
  Input,
  Label,
  Paragraph,
  Password,
  imagen,
  Logo,
  Pregister,
} from "./login.styled.js";

export default function Login() {
  const erUser = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  return (
    <>
      {/* header */}
      <div>
        <Logo src={imagen} alt="logo" />
        <Router>
          <h2>Ingrese a su cuenta</h2>
          <Paragraph>
            ¿No tienes una cuenta?{" "}
            <strong>
              <Link to="register">
                <Pregister>Registrate</Pregister>
              </Link>
            </strong>
          </Paragraph>
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
      {/* main */}
      <Formik
        initialValues={{
          contraseña: "",
          correo: "",
        }}
        validate={(values) => {
          let errores = {};

          // validacion contraseña
          if (!values.contraseña) {
            errores.contraseña = "Por favor ingresa un contraseña";
          } else if (!erUser.test(values.contraseña)) {
            errores.contraseña =
              "El contraseña no puede contener numeros o signos";
          }

          if (!values.correo) {
            errores.correo = "Por favor ingresa un correo";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("submit");
          // llamar api, conectarse , y enviar los valores
        }}
      >
        {/* imports of formik */}
        {({
          values,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
        }) => (
          <Container>
            <Form onSubmit={handleSubmit}>
              <DivInput>
                <Label htmlFor="Contraseña">Contraseña</Label>
                <Input
                  type="text"
                  id="contraseña"
                  name="contraseña"
                  placeholder="Ingrese su contraseña"
                  value={values.contraseña}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
              </DivInput>
              {touched.contraseña && errors.contraseña && (
                <Error>{errors.contraseña}</Error>
              )}
              <DivInput>
                <Label htmlFor="Correo">Correo</Label>
                <Input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="Ingrese su correo"
                  value={values.correo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // cambiar type:correo
                ></Input>
              </DivInput>
              {touched.correo && errors.correo && (
                <Error>{errors.correo}</Error>
              )}
              <Button typeOf="submit">Enviar</Button>
              <Password>¿Se te olvido tu contraseña?</Password>
            </Form>
          </Container>
        )}
      </Formik>
    </>
  );
}
