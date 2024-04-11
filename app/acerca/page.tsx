
import "../globals.css";
import React from 'react';
import Image from 'next/image';
import AcercaDe from '@/public/images/AcercaDe.jpg';

export default function ContactForm() {
    return (
      <section className="relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Homme content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <Image src={AcercaDe} width={768} height={432} layout="responsive" alt="Illustration" />
        </div>

      </div>
    </section>
    );
}