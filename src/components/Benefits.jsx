import React from 'react';

function Benefits() {
  return (
    <section className="py-5 backgroundRGB benefits-section">
      <div className="container">
        <h2 className="text-center section-title">
          Benefícios
        </h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h4><img src="/assets/icons/iconInclusion.png" alt="inclusion" /> Inclusão</h4>
                <p>
                  Promove acessibilidade e autonomia para
                  pessoas com deficiência auditiva.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h4><img src="/assets/icons/iconFlash.png" alt="Fast" /> Tempo Real</h4>
                <p>
                  Tradução instantânea para tornar o diálogo
                  mais natural e eficiente.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <h4><img src="/assets/icons/iconsWorld.png" alt="World" /> Impacto Social</h4>
                <p>
                  Facilita atendimentos em hospitais,
                  escolas, empresas e órgãos públicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
