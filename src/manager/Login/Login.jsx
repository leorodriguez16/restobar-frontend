import { Formik } from "formik";
import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import {
  Container,
  Error,
  Button,
  DivInput,
  Form,
  Input,
  Label,
  Password,
  imagen,
  DivInputIcon,
  IconEye,
} from "./login.styled.js";
import { useState } from "react";
export default function Login() {
  const [showPsw, setShowIcon] = useState(false);
  const changeState = () => {
    setShowIcon(!showPsw);
  };

  return (
    <>
      {/* header */}
      <Header
        img={imagen}
        imgAlt="logo"
        h2="Ingrese a su cuenta"
        p="¿No tienes una cuenta?"
        link="Registrate"
        path="/register"
      />

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
                <Label htmlFor="Correo">Correo</Label>
                <Input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="Ingrese su correo"
                  value={values.correo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Input>
              </DivInput>
              {touched.correo && errors.correo && (
                <Error>{errors.correo}</Error>
              )}
              <DivInput>
                <Label htmlFor="Contraseña">Contraseña</Label>
                <DivInputIcon>
                  <Input
                    type={showPsw ? "text" : "password"}
                    id="contraseña"
                    name="contraseña"
                    placeholder="Ingrese su contraseña"
                    value={values.contraseña}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></Input>
                  <IconEye
                    onClick={changeState}
                    icon={showPsw ? faEye : faEyeSlash}
                  />
                </DivInputIcon>
              </DivInput>
              {touched.contraseña && errors.contraseña && (
                <Error>{errors.contraseña}</Error>
              )}
              <Button type="submit">Enviar</Button>
              <Password>
                <Link to="/password">¿Se te olvido tu contraseña?</Link>
              </Password>
            </Form>
          </Container>
        )}
      </Formik>
    </>
  );
}
