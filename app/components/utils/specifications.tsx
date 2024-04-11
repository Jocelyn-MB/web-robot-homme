import Image from 'next/image';

export default function QuoteSection() {
  return (
    <section className="quote__section w-full relative bg-white mx-auto px-8 lg:w-4/5">
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-lg py-lg quote__section__grid lg:h-full">
        <figure className="relative overflow-hidden aspect-portrait col-span-full md:col-span-6">
          <Image
            src="/images/robotsito.jpg"
            alt="Kasim Kutay"
            width={3840}
            height={2560}
            layout="responsive"
          />
        </figure>
        <div className="flex flex-col justify-center col-span-full md:col-span-6 lg:p-8">
          <div className="max-w-lg">
            <blockquote className="mb-11">
              <div className="font-novoApply styles_richtext__vtvls styles_quote__block__aHUoR">
                <h3>Este proyecto desarrolla un Robot Automatizado con tecnología IoT y sensores para abordar los desafíos del envejecimiento de la población. Ofrece monitoreo continuo de las condiciones ambientales y la frecuencia cardíaca de adultos mayores en sus hogares, con alertas ante posibles emergencias.</h3>
              </div>
            </blockquote>
            <p className="text-dark font-novoApply text-sm">Equipo de trabajo:</p>
            <p className="text-dark font-novoApply text-sm">Carapia Hernandez Janet Leilani,</p>
              <p className="text-dark font-novoApply text-sm">Mancilla Blancas Jocelyn Magali, </p>
              <p className="text-dark font-novoApply text-sm">García Mendoza Ángel, 
              </p>
              <p className="text-dark font-novoApply text-sm">Becerril Rosillo Emilio </p>
          </div>
        </div>
      </div>
    </section>
  );
}
