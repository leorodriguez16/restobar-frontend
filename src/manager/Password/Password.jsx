import React from "react";
import { Button, Container, Form, imagen } from "../Login/login.styled";
import Header from "../components/Header";
import Input from "../components/Input";
import { Formik } from "formik";
import { ErrorReg } from "../Register/register.style";

const Password = () => {
  return (
    <>
      <Header
        img={imagen}
        imgAlt="logo"
        h2="Recuperar contraseña"
        p="¿Ya tienes una cuenta?"
        link="Ingresar"
        path="/login"
      />
      <Formik
        initialValues={{
          email: "",
        }}
        validate={(values) => {
          let errores = {};
          if (!values.email) {
            errores.email = "Ingrese su correo";
          } else if (values.email === "correo validado") {
            errores.email = "Ingrese un correo valido";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("hola");
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
              <Form onSubmit={handleSubmit}>
                <Input
                  nombre="email"
                  label="Ingrese su correo "
                  id="email"
                  blur={handleBlur}
                  change={handleChange}
                  value={values.email}
                  placeholder="Ingrese su correo"
                  type="email"
                />

                {touched.email && errors.email && (
                  <ErrorReg>{errors.email}</ErrorReg>
                )}
                <Button type="submit">Recuperar</Button>
              </Form>
            }
          </Container>
        )}
      </Formik>
    </>
  );
};

export default Password;
