import React from 'react';

function Differential() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="fw-bold mb-5">
          Diferencial
        </h2>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <p className="fs-5">
              Por mais que já existam alguns sistemas de tradução de
              libras, nenhum deles apresenta uma tradução em tempo
              real que permita uma comunicação bilateral e fluida,
              com eles servindo mais como uma ferramenta de
              aprendizado.
              Enquanto o nosso projeto tem como o foco a criação de
              uma meio de comunicação clara, simultânea e que
              atende diretamente ao problema, facilitando a
              comunicação com qualquer pessoa.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <img src="/assets/otherVsUs-removebg.png" alt="Diferenciais" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Differential;
