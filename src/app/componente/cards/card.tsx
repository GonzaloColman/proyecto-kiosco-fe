"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Productos } from "../interface/productos";
import { useId } from "@/app/contex/idcontex";

export const ProductosCard = (props: Productos) => {
  const idContex = useId();
  return (
    <Card className="card-container" onClick={() => idContex.setId(props.id)}>
      <Card.Img
        className="card-image"
        variant="top"
        src={props.imagenUrl}
        alt={props.Nombre}
      />
      <div className="card-content">
        <Card.Text>Precio: ${props.Precio}</Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Nombre: {props.Nombre}</ListGroup.Item>
          <ListGroup.Item>Descripción: {props.Descripcion}</ListGroup.Item>
          <ListGroup.Item>Stock: {props.Stock}</ListGroup.Item>
          <button>Comprar</button>
          {}
        </ListGroup>
      </div>
    </Card>
  );
};
