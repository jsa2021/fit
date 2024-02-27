"use client"

import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Checkbox } from "@nextui-org/checkbox";

export default function PerfilPage() {
  
  let value1;
  let value2;
  let value3;
  let value4;



  // Get the value from local storage if it exists
  // value1 = localStorage.getItem("Nombre") || "";
  // value2 = localStorage.getItem("Peso") || "";
  // value3 = localStorage.getItem("Altura") || "";



  // Set the value received from the local storage to a local state
  const [Nombre, setNombre] = useState(value1);
  const [Peso, setPeso] = useState(value2);
  const [Altura, setAltura] = useState(value3);

  // When user submits the form, save the data to local storage
  const saveToLocalStorage = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    localStorage.setItem("Nombre", Nombre);
    localStorage.setItem("Peso", Peso);
    localStorage.setItem("Altura", Altura);
  };

  return (
    <div>
      <label htmlFor="number">Your favorite number</label>
      <Divider className="my-4" />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <form onSubmit={saveToLocalStorage}>
          <Input
            id="nombre"
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
            type=""
            label="Nombre"
            placeholder="Ingresa tu nombre"
          />
          <Divider className="my-4" />
          <Input
            id="altura"
            value={Altura}
            onChange={(e) => setAltura(e.target.value)}
            type=""
            label="Altura"
            placeholder="Ingresa tu altura"
          />
          <Divider className="my-4" />
          <Input
            id="peso"
            value={Peso}
            onChange={(e) => setPeso(e.target.value)}
            type=""
            label="Peso"
            placeholder="Ingresa tu peso"
          />
          <Divider className="my-4" />
          <Button color="primary" type="submit">
            Guardar
          </Button>
        </form>
      </div>
    </div>
  );
}