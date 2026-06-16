import React from 'react';

function Problem() {
  return (
    <section id="projeto" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Problema
        </h2>
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <p className="fs-5">
              <b>Brasil existem 2,3 milhões de
                pessoas com deficiência auditiva.</b>
              Essas pessoas enfrentam varias desafios,
              principalmente na comunicação com pessoas
              não deficientes e que não sabem libras, o que
              dificulta gravemente aspectos da sua vida,
              como interagir com atendentes de mercados e
              bancos, e limita sua socialização apenas a um
              grupo limitado de pessoas.
            </p>
          </div>
          <div className="col-12 mt-4">
            <img src={`${process.env.PUBLIC_URL}/assets/comunicaHands.png`} alt="Libras comunicação" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;
