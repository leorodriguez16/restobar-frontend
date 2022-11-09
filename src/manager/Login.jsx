import React from "react";
import { Formik } from "formik";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
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
} from "./Login.style";
import Register from "./Register";

export default function Login() {
  const erUser = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  return (
    <div>
      <div>
        <Logo src={imagen} alt="a" />
        <Router>
          <h2>Ingrese a su cuenta</h2>
          <Paragraph>
            ¿No tienes una cuenta?{" "}
            <strong>
              <Link to="register">Registrate</Link>
            </strong>
          </Paragraph>
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
        }}
        validate={(values) => {
          let errores = {};

          // validacion nombre
          if (!values.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!erUser.test(values.nombre)) {
            errores.nombre = "El nombre no puede contener numeros o signos";
          }

          if (!values.correo) {
            errores.correo = "Por favor ingresa un correo";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
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
                <Label htmlFor="Usuario">Usuario</Label>
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Ingrese su nombre"
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
              </DivInput>
              {touched.nombre && errors.nombre && (
                <Error>{errors.nombre}</Error>
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
              <Button>Enviar</Button>
              <Password>¿Se te olvido tu contraseña?</Password>
            </Form>
          </Container>
        )}
      </Formik>
    </div>
  );
}
