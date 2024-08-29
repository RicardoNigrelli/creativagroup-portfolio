import Details from '@/components/Details';
import React from 'react'

const page = () => {

  const title = "¡RECIBE ASESORAMIENTO PROFESIONAL PARA TU NEGOCIO!";
  const description = "Nuestro equipo de consultores, compuesto por expertos en diversas áreas, está aquí para ofrecerte estrategias personalizadas y soluciones efectivas. Con años de experiencia en el campo, estamos listos para ayudarte a alcanzar tus metas. ¿Quieres ver cómo podemos asesorarte? Explora nuestro portfolio de consultoría."
  const color = "#FEC28E";
  return (
    <div className="flex min-h-screen items-center justify-center">
    <Details title={title} description={description} color={color} />    
</div>
  );
}

export default page