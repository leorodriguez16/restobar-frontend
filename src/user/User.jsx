import { Formik } from "formik";
import React from "react";

const User = () => {
  return (
    <>
      <p>user</p>
      {() => {
        <Formik>
          <p>a</p>
        </Formik>;
      }}
    </>
  );
};
export default User;
