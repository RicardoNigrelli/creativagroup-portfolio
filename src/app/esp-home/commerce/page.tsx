import Details from '@/components/Details';
import React from 'react'

const page = () => {

  const title = "¡COMERCIALIZA Y DISTRIBUYE TU MARCA CON ÉXITO!"
  const description = "Contamos con un equipo especializado en la comercialización y distribución de productos. Nuestros profesionales te ayudarán a expandir tu marca y alcanzar nuevos mercados con eficacia. ¿Quieres conocer más sobre nuestras soluciones?"
  return (
    <div className="flex min-h-screen items-center justify-center">
    <Details title={title} description={description} />    
</div>
  );
}

export default page