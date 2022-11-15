import { Formik } from "formik";
import { Link, Route, Router, Routes } from "react-router-dom";
import Register from "../Register/Register";
import Header from "./components/Header";
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
} from "./login.styled.js";

export default function Login() {
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

      <Routes>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

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
          console.log(valores);

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
                  // cambiar type:correo
                ></Input>
              </DivInput>
              {touched.correo && errors.correo && (
                <Error>{errors.correo}</Error>
              )}
              <DivInput>
                <Label htmlFor="Contraseña">Contraseña</Label>
                <Input
                  type="password"
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
              <Button typeOf="submit">Enviar</Button>
              <Password>
                <Link>¿Se te olvido tu contraseña?</Link>
              </Password>
            </Form>
          </Container>
        )}
      </Formik>
    </>
  );
}
