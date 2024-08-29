import Details from '@/components/Details';
import React from 'react'

const page = () => {

  const title = "¡COLABORA CON NUESTRA FUNDACIÓN!";
  const description = "En Creativa Group, nuestro equipo trabaja incansablemente en nuestra fundación para ofrecer comida y educación a los niños que más lo necesitan. Estamos dedicados a hacer una diferencia real en la vida de los más jóvenes. ¿Te gustaría saber más sobre cómo puedes ayudar o unirte a nuestra causa? Descubre más sobre nuestra fundación y cómo puedes participar"
  const color = "#00873E";
  return (
    <div className="flex min-h-screen items-center justify-center">
    <Details title={title} description={description} color={color} />    
</div>
  );
}

export default page