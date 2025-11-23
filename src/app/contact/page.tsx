// src/app/contact/page.tsx
import { Metadata } from 'next';
import { personalInfo } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto conmigo para proyectos, colaboraciones o consultas',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Contacto</h1>
        <p className="text-gray-600 mb-12">
          ¿Tienes un proyecto en mente? ¡Me encantaría saber de ti!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">GitHub</h3>
                <a 
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  {personalInfo.github}
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                <a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  {personalInfo.linkedin}
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Envíame un mensaje</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
