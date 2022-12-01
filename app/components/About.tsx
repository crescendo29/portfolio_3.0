
import React from 'react'

function About() {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-4 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#08929c]">
            à propos
          </p>
          <h2 className="py-4">Qui suis-je ?</h2>
          <p className="py-2 text-gray-600">
            / / Je ne suis pas un développeur ordinaire
          </p>
          <p className="py-2 text-gray-600">
            J'ai passé les dix dernières années à travailler avec les restaurants pour leur fournir tout ce qui peut servir à cuisiner et à servir.
            J'ai toujours eu de l'intérêt pour la Tech et ce qu'on pouvait faire avec un ordinateur.
            En 2019 j'ai commencé à travailler avec HTML & CSS pour réaliser de petits contenus.
            Puis je me suis pris au jeu avec JavaScript puis les frameworks...Et c'est devenu une passion.
           
          </p>
          <p className="py-2 text-gray-600">
            Fasciné par toutes les connexions que la programmation peut avoir, j'ai vite eu envie d'en apprendre de plus en plus.
            J'ai commencé à construire des sites pour ma famille et mes amis.
            Et maintenant je partage mon temps entre des projets avec ReactJS, NextJs ou encore Svelte et l'apprentissage de nouvelles Technos.
            
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Jetez un oeil à mes derniers projets.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1542598953-41310c43f54b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkxfHxsYXB0b3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="laptop"
          />
        </div>
      </div>
    </div>
  )
}

export default About