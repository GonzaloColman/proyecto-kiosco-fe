"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "@/app/componente/header_footer/footer";
import Header from "@/app/componente/header_footer/header";
import React, { useState } from "react";
import clienteAxios from "@/app/services/axios";

export default function PageLogIn() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(""); //para enviar el error

  const handleLoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      // Envía los datos al backend (Nest.js)
      await clienteAxios.post("/login", {
        correo,
        contraseña,
      });
      console.log("Inicio de sesión exitoso");
    } catch (error) {
      setError(
        "Error al iniciar sesión. Por favor, verifica su correo y contraceña."
      );
    }
  };

  return (
    <>
      <Header />
      <div className="color">
        <Form className="margenes_login" onSubmit={handleLoginSubmit}>
          <Form.Group className="mb-3" controlId="IdEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
            {error && <p className="text-danger">{error}</p>}{" "}
          </Form.Group>

          <Form.Group className="mb-3" controlId="IdContraceña">
            <Form.Label> Contraceña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraceña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Iniciar sesión
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  );
}
