import React from "react";

function Technologies() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Tecnologias Utilizadas
        </h2>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title text-primary fw-bold">
                  Bootstrap
                </h5>

                <img
                  src="/assets/icons/Bootstrap.png"
                  alt="Bootstrap"
                  className="img-fluid mt-3"
                  style={{
                    maxWidth: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title text-info fw-bold">
                  React
                </h5>

                <img
                  src="/assets/icons/React.png"
                  alt="React"
                  className="img-fluid mt-3"
                  style={{
                    maxWidth: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title text-success fw-bold">
                  Canva
                </h5>

                <img
                  src="/assets/icons/canva.png"
                  alt="Canva"
                  className="img-fluid mt-3"
                  style={{
                    maxWidth: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;