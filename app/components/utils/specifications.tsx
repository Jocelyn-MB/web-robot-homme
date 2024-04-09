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
                <h2>Reconocemos que la salud de las personas y la salud de nuestro planeta están entrelazadas y estamos decididos a desempeñar nuestro papel para asegurar un futuro más sostenible.</h2>
              </div>
            </blockquote>
            <p className="text-dark font-novoApply text-body"></p>
            <p className="text-dark font-novoApply text-body"></p>
          </div>
        </div>
      </div>
    </section>
  );
}
