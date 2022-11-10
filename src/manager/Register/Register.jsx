import React from "react";
import { Formik } from "formik";
import { Container, Error, Button, DivInput } from "../Login/login.styled";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import InputRegister from "./components/Input";
import {
  FormReg,
  GrupInput,
  IconValidation,
  InputReg,
  LabelReg,
} from "./register.style";
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
              <FormReg>
                <InputRegister
                  label="Nombre"
                  type="email"
                  name="email"
                  placeholder="Ingrese su email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && errors.name && <Error>{errors.name}</Error>}
                <InputRegister
                  label="Correo"
                  type="email"
                  name="email"
                  placeholder="Ingrese su email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email && errors.email && <Error>{errors.email}</Error>}
                <DivInput>
                  <LabelReg htmlFor="password">Contraseña</LabelReg>
                  <GrupInput>
                    <InputReg
                      type="password"
                      name="password"
                      placeholder="Ingrese su contraseña"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // cambiar type:email
                    ></InputReg>
                    <IconValidation icon={faCheckCircle} />
                  </GrupInput>
                </DivInput>
                {touched.password && errors.password && (
                  <Error>{errors.password}</Error>
                )}
                <DivInput>
                  <LabelReg htmlFor="password">Confirma contraseña</LabelReg>
                  <GrupInput>
                    <InputReg
                      type="password"
                      name="valpassword"
                      placeholder="Ingrese su contraseña"
                      // cambiar type:email
                    ></InputReg>
                    <IconValidation icon={faCheckCircle} />
                  </GrupInput>
                </DivInput>
                {touched.contraseña && errors.contraseña && (
                  <Error>{errors.contraseña}</Error>
                )}
                <Button>Enviar</Button>
              </FormReg>
            }
          </Container>
        )}
      </Formik>
    </>
  );
};

export default Register;
