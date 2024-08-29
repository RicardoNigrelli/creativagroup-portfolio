import Details from '@/components/Details';
import React from 'react'

const page = () => {

  const title = "¡TRANSFORMA TU PRESENCIA ONLINE CON NUESTRO DESARROLLO WEB!";
  const description = "Nuestro equipo de desarrolladores está listo para crear soluciones a medida que lleven tu presencia online al siguiente nivel. Con un enfoque en la innovación y la funcionalidad, estamos aquí para transformar tu sitio web. ¿Interesado en ver ejemplos de nuestro trabajo? Conoce a nuestro equipo"
  const color = "#CE9AD3";
  return (
    <div className="flex min-h-screen items-center justify-center">
    <Details title={title} description={description} color={color} />    
</div>
  );
}

export default page