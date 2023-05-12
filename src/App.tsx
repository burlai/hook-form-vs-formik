import React from "react";
import "./App.css";
import HookForm from "./components/HookForm";
import Formik from "./components/Formik";
import NativeHTMLForm from "./components/NativeHTMLForm";

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
        <div className="row mt-4">
          <section className="col-6">
            <h2 className="h2 mb-3">Native HTML form</h2>
            <NativeHTMLForm />
          </section>
        </div>
      </section>
    </section>
  );
};

export default App;
