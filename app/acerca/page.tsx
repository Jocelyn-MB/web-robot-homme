
import "../globals.css";
import React from 'react';
import Image from 'next/image';
import AcercaDe from '@/public/images/AcercaDe.jpg';

export default function ContactForm() {
    return (
       <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">ROBOT AUTOMATIZADO PARA CUIDADO Y MONITOREO DE ADULTOS MAYORES </h1>
         </div>
  
          {/* Section Poster*/}
         <div className="grid grid-cols-4 gap-sm mx-xxs md:grid-cols-12 md:gap-lg md:mx-sm py-lg quote__section__grid grid-flow-dense lg:h-full pt-6 pb-6">
            <figure className="relative overflow-hidden aspect-portrait col-span-full md:col-span-6">
                <Image
                  src="/images/homeeAcerdadejpg-gigapixel-standard.png"
                  alt="Proyecto Homme"
                  width={3840}
                  height={2560}
                  layout="responsive"
                />
              </figure>
              <div className="relative flex flex-col justify-center p-6 col-span-full mt-12 md:mt-0 text-dark h-full md:col-span-6 lg:p-8"> {/* Aplicando padding al texto */}
                <div className="max-w-lg"> 
                  <blockquote className="mb-11">
                    <div className="font-novoApply styles_richtext__vtvls styles_quote__block__aHUoR">
                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 pb-4">Acerca del Proyecto</h4>
                    <h2>El proyecto empleó la metodología ágil Scrum, comenzando con una planificación inicial para definir el backlog del producto y establecer hitos. Se formó un equipo multidisciplinario y se llevó a cabo un Sprint 0 para investigar y preparar el desarrollo. El trabajo se dividió en iteraciones de dos semanas, cada una concluyendo con revisiones y retrospectivas.</h2>
                    </div>
                  </blockquote>
                  <p className="text-dark font-novoApply text-body"></p>
                  <p className="text-dark font-novoApply text-body"></p>
                </div>
            </div>
          </div>
          {/* Section Poster*/}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <Image src={AcercaDe} width={708} height={772} layout="responsive" alt="Illustration" />
          </div>
        </div>
      </div>
    </section>
    );
}