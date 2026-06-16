import React from 'react';

function HowItWorks() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center section-title">
          Como Funciona
        </h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm feature-card">
              <div className="card-body text-center">
                <div className="icon"><img src={`${process.env.PUBLIC_URL}/assets/icons/iconLove.png`} alt="Love" /></div>
                <h4 className="mt-3">
                  Libras → Voz
                </h4>
                <p>
                  A câmera identifica os movimentos das mãos,
                  interpreta os sinais em Libras e converte
                  automaticamente para fala.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-sm feature-card">
              <div className="card-body text-center">
                <div className="icon"><img src={`${process.env.PUBLIC_URL}/assets/icons/iconMicrofone.png`} alt="microfone" /></div>
                <h4 className="mt-3">
                  Voz → Texto
                </h4>
                <p>
                  A fala da pessoa ouvinte é capturada pelo
                  microfone e transcrita em tempo real para
                  leitura pela pessoa surda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
