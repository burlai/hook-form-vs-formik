import React from "react";
import "./App.css";
import HookForm from "./components/HookForm";
import Formik from "./components/Formik";
import NativeHTMLForm from "./components/NativeHTMLForm";
import HookFormWithYup from "./components/HookFormWithYup";
import HookFormWithZod from "./components/HookFormWithZod";

const App: React.FC = () => {
  return (
    <section className="App">
      <h1 className="h1 mb-5">React Hook Form VS Formik</h1>
      <section className="container">
        <div className="row">
          <section className="col-6">
            <h2 className="h2 mb-3">React Hook Form</h2>
            <HookForm />
          </section>
          <section className="col-6">
            <h2 className="h2 mb-3">Formik</h2>
            <Formik />
          </section>
        </div>
        <hr className="mb-4 mt-5" />
        <div className="row mt-4">
          <section className="col-6">
            <h2 className="h2 mb-3">Native HTML form</h2>
            <NativeHTMLForm />
          </section>
        </div>
        <hr className="mb-4 mt-5" />
        <div className="row mt-4">
          <section className="col-6">
            <h2 className="h2 mb-3">React Hook Form with Yup</h2>
            <HookFormWithYup />
          </section>
          <section className="col-6">
            <h2 className="h2 mb-3">React Hook Form with Zod</h2>
            <HookFormWithZod />
          </section>
        </div>
      </section>
    </section>
  );
};

export default App;
