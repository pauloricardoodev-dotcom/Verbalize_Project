import React from 'react';

function Solution() {
  return (
    <section className="py-5 backgroundRGB">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Nossa solução
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <ul className="fs-5">
              <li>A solução é um sistema que identifica em tempo
                real, por meio de uma câmera, os sinais e
                expressões do cliente e os verbaliza e escreve em
                texto para o atendente.
              </li>
              <li>
                Ao mesmo tempo o sistema por meio de um
                microfone capta a voz do atendente e a transcreve
                para o deficiente.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;
