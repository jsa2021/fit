"use client";
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Checkbox } from "@nextui-org/checkbox";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Divider } from "@nextui-org/divider";
import { Avatar } from "@nextui-org/avatar";
import { useState, useEffect } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

export default function FitPage() {
 
  const {isOpen, onOpen, onOpenChange } = useDisclosure();
  const [titulo, setTitulo] = useState<string>("");
  const [desc1, setDesc1] = useState<string[]>([]);

  const handleChange = (value: any, value1: any, value2: any) => {
    setTitulo(value);
    setDesc1(value1);
    onOpen();
  };

  const list = [
    {
      title: "Calentamiento",
      img: "/images/calentamiento.jpg",
      price: "4 minutos",
      description: [
        "1- Movilidad articular.",
        "2- Cardio ligero.",
        "3- Estiramiento dinámico.",
        "4- Activación muscular.",
        "5- Calentamiento específico.",
      ],
    },
    {
      title: "Plancha",
      img: "/images/plancha.jpg",
      price: "30 Segundos",
      description: [
        "1- Colócate boca abajo con antebrazos y dedos de los pies en el suelo.",
        "2- Mantén el cuerpo en línea recta desde la cabeza hasta los talones.",
        "3- Activa core y glúteos.",
        "4- Respira de manera controlada.",
        "5- Comienza con 20-30 segundos y aumenta progresivamente el tiempo.",
        "6- Sal de la posición suavemente y mantén la forma adecuada en todo momento.",
      ],
    },
    {
      title: "Sentadilla",
      img: "/images/sentadilla.jpg",
      price: "8 Repeticiones",
      description: [
        "1- Movilidad articular.",
        "2- Cardio ligero.",
        "3- Estiramiento dinámico.",
        "4- Activación muscular.",
        "5- Calentamiento específico.",
      ],
    },
    {
      title: "Zancadas",
      img: "/images/zancadas.jpg",
      price: "8 Repeticiones c/lado",
      description: [
        "1- Movilidad articular.",
        "2- Cardio ligero.",
        "3- Estiramiento dinámico.",
        "4- Activación muscular.",
        "5- Calentamiento específico.",
      ],
    },
    {
      title: "Flexiones",
      img: "/images/flexiones.jpg",
      price: "8 Repeticiones",
      description: [
        "1- Movilidad articular.",
        "2- Cardio ligero.",
        "3- Estiramiento dinámico.",
        "4- Activación muscular.",
        "5- Calentamiento específico.",
      ],
    },
    {
      title: "Elevacion de piernas",
      img: "/images/elevaciondepiernas.jpg",
      price: "8 Repeticiones",
      description: [
        "1- Movilidad articular.",
        "2- Cardio ligero.",
        "3- Estiramiento dinámico.",
        "4- Activación muscular.",
        "5- Calentamiento específico.",
      ],
    },
    {
      title: "Escaladores",
      img: "/images/escaladores.jpg",
      price: "30 Segundos",
      description: [
        "1- Movilidad articular.",
        "2- Cardio ligero.",
        "3- Estiramiento dinámico.",
        "4- Activación muscular.",
        "5- Calentamiento específico.",
      ],
    },
    {
      title: "Flexiones en pica",
      img: "/images/flexionespica.jpg",
      price: "8 Repeticiones",
      description: [
        "1- Movilidad articular.",
        "2- Cardio ligero.",
        "3- Estiramiento dinámico.",
        "4- Activación muscular.",
        "5- Calentamiento específico.",
      ],
    },
  ];

   
  let serie1;
  let serie2;
  let serie3;
  let serie4;
  

    // Set the value received from the local storage to a local state
    const [Serie1, setSerie1] = useState(serie1|| false); // Valor por defecto false
    const [Serie2, setSerie2] = useState(serie2|| false); // Valor por defecto false
    const [Serie3, setSerie3] = useState(serie3|| false); // Valor por defecto false
    const [Serie4, setSerie4] = useState(serie4|| false); // Valor por defecto false


  if (typeof window !== 'undefined') {
    console.log('You are on the browser')
   
  

  
  
       // Get the value from local storage if it exists
    serie1 = localStorage.getItem("Serie1");
    if(serie1 !== null) serie1 = JSON.parse(serie1); // Convertir de cadena a booleano
    serie2 = localStorage.getItem("Serie2");
    if(serie2 !== null) serie2 = JSON.parse(serie2); // Convertir de cadena a booleano
    serie3 = localStorage.getItem("Serie3");
    if(serie3 !== null) serie3 = JSON.parse(serie3); // Convertir de cadena a booleano
    serie4 = localStorage.getItem("Serie4");
    if(serie4 !== null) serie4 = JSON.parse(serie4); // Convertir de cadena a booleano
  
   
  
  
  
  
  
    // Set the value received from the local storage to a local state
  
  
    useEffect(() => {
      // Este efecto se ejecuta cada vez que 'count' cambia
      localStorage.setItem("Serie1", JSON.stringify(Serie1));
      localStorage.setItem("Serie2", JSON.stringify(Serie2));
      localStorage.setItem("Serie3", JSON.stringify(Serie3));
      localStorage.setItem("Serie4", JSON.stringify(Serie4));
  
      
  
  
    }, [Serie1, Serie2, Serie3, Serie4]);




  } else {
    console.log('You are on the server')
    





  }


  



  return (
    <div className="max-w-screen-md mx-auto">
      <Accordion selectionMode="multiple">
        <AccordionItem
          key="1"
          aria-label="Chung Miller"
          startContent={
            <Avatar
              isBordered
              color="primary"
              radius="lg"
              src="/iconos/one.png"
            />
          }
          subtitle="Este programa está diseñado para ayudarte a construir una base sólida de fuerza, ​​flexibilidad y resistencia mientras te familiarizas con los fundamentos del entrenamiento físico."
          title="Rutina 1"
        >
          <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          
              <Checkbox color="success"
              id="Serie1"
              isSelected={Serie1}
              onChange={(e) => setSerie1(e.target.checked)}
              
              >1ra serie</Checkbox>
              <Checkbox color="success"
              id="Serie2"
              isSelected={Serie2}
              onChange={(e) => setSerie2(e.target.checked)}
              
              >2da serie</Checkbox>
              <Checkbox color="success"
              id="Serie3"
              isSelected={Serie3}
              onChange={(e) => setSerie3(e.target.checked)}
              
              >3ra serie</Checkbox>
              <Checkbox color="success"
              id="Serie4"
              isSelected={Serie4}
              onChange={(e) => setSerie4(e.target.checked)}
              
              >4ta serie</Checkbox>
            </div>
            <Divider orientation="vertical"></Divider>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      {titulo}
                    </ModalHeader>
                    <ModalBody>
                      {desc1.map((step, index) => (
                        <React.Fragment key={index}>
                          {step}
                          <br />
                        </React.Fragment>
                      ))}
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>

            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-full">
              {list.map((item, index) => (
                <Card
                  shadow="sm"
                  key={index}
                  isPressable
                  onPress={() =>
                    handleChange(item.title, item.description, ["", "", ""])
                  }
                >
                  <CardBody className="overflow-visible p-0">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="200%"
                      alt={item.title}
                      className="w-full object-cover h-[240px]"
                      src={item.img}
                    />
                  </CardBody>
                  <CardFooter className="text-small justify-center">
                    <li>
                      <b>{item.title}</b>
                      <p className="text-default-500">{item.price}</p>
                      
                      
                      <Checkbox color="success"
                      // id="Serie1"
                      // isSelected={Serie1}
                      // onChange={(e) => setSerie1(e.target.checked)}
              
              >Listo</Checkbox>


                    </li>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Chung Miller"
          startContent={
            <Avatar
              isBordered
              color="primary"
              radius="lg"
              src="/iconos/two.png"
            />
          }
          subtitle="Este programa está diseñado para llevar tu entrenamiento al siguiente nivel, desafiando tus límites y mejorando aún más tu fuerza, resistencia y ​​condición física general."
          title="Rutina 2"
        >
          <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              <Checkbox color="success">1ra serie</Checkbox>
              <Checkbox color="success">2da serie</Checkbox>
              <Checkbox color="success">3ra serie</Checkbox>
              <Checkbox color="success">4ta serie</Checkbox>
            </div>
            <Divider orientation="vertical"></Divider>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      {titulo}
                    </ModalHeader>
                    <ModalBody>
                      {desc1.map((step, index) => (
                        <React.Fragment key={index}>
                          {step}
                          <br />
                        </React.Fragment>
                      ))}
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>

            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-full">
              {list.map((item, index) => (
                <Card
                  shadow="sm"
                  key={index}
                  isPressable
                  onPress={() =>
                    handleChange(item.title, item.description, ["", "", ""])
                  }
                >
                  <CardBody className="overflow-visible p-0">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="200%"
                      alt={item.title}
                      className="w-full object-cover h-[240px]"
                      src={item.img}
                    />
                  </CardBody>
                  <CardFooter className="text-small justify-center">
                    <li>
                      <b>{item.title}</b>
                      <p className="text-default-500">{item.price}</p>
                      <Checkbox color="success">Listo</Checkbox>
                    </li>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="Chung Miller"
          startContent={
            <Avatar
              isBordered
              color="primary"
              radius="lg"
              src="/iconos/three.png"
            />
          }
          subtitle="Esta rutina de ejercicios avanzada está diseñada para atletas experimentados que buscan llevar su rendimiento al máximo nivel, desafiando sus límites y superando obstáculos."
          title="Rutina 3"
        >
          <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
              <Checkbox color="success">1ra serie</Checkbox>
              <Checkbox color="success">2da serie</Checkbox>
              <Checkbox color="success">3ra serie</Checkbox>
              <Checkbox color="success">4ta serie</Checkbox>
            </div>
            <Divider orientation="vertical"></Divider>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      {titulo}
                    </ModalHeader>
                    <ModalBody>
                      {desc1.map((step, index) => (
                        <React.Fragment key={index}>
                          {step}
                          <br />
                        </React.Fragment>
                      ))}
                    </ModalBody>
                  </>
                )}
              </ModalContent>
            </Modal>

            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-full">
              {list.map((item, index) => (
                <Card
                  shadow="sm"
                  key={index}
                  isPressable
                  onPress={() =>
                    handleChange(item.title, item.description, ["", "", ""])
                  }
                >
                  <CardBody className="overflow-visible p-0">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="200%"
                      alt={item.title}
                      className="w-full object-cover h-[240px]"
                      src={item.img}
                    />
                  </CardBody>
                  <CardFooter className="text-small justify-center">
                    <li>
                      <b>{item.title}</b>
                      <p className="text-default-500">{item.price}</p>
                      <Checkbox color="success">Listo</Checkbox>
                    </li>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
