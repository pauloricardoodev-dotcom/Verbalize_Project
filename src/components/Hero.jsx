import React from 'react';

function Hero() {
  return (
    <section className="hero d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="hero-frame mx-auto py-5 px-3 px-md-5 text-center">
          <h1 className="hero-title">
            VERBALIZE
          </h1>
          <p className="hero-subtitle fw-semibold mx-auto">
            Sistema para comunicação entre
            pessoas surdas e ouvintes
          </p>
          <a href="#projeto" className="btn btn-dark btn-lg mt-3">
            Conhecer Projeto
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
