import React, { useState } from 'react';

function InteractiveDemo() {
  const [isProcessing1, setIsProcessing1] = useState(false);
  const [isProcessing2, setIsProcessing2] = useState(false);
  const [outputText1, setOutputText1] = useState('');
  const [outputText2, setOutputText2] = useState('');
  const [inputText2, setInputText2] = useState('');

  const handleProcess1 = () => {
    if (isProcessing1) return;
    setIsProcessing1(true);
    setTimeout(() => {
      setOutputText1('Olá! Como você está?');
      setIsProcessing1(false);
    }, 1500);
  };

  const handleProcess2 = () => {
    if (isProcessing2) return;
    setIsProcessing2(true);
    setTimeout(() => {
      setOutputText2('👋 🤟 👍');
      setIsProcessing2(false);
    }, 1500);
  };

  const handleInputChange2 = (e) => {
    setInputText2(e.target.value);
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center section-title mb-4">
          Experimente Agora
        </h2>
        <p className="text-center mb-5">
          Interaja com as duas interfaces para ver como a tradução funciona
        </p>
        
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="demo-grid">
              {/* Tela 1 - Libras → Voz */}
              <div className="demo-section">
                <div className="demo-header">
                  <h3>Tela 1</h3>
                  <p className="demo-subtitle">Libras → Voz</p>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <div className="phone-mockup-small">
                      <div className="phone-frame-small">
                        <div className="phone-screen-small">
                          <div className="phone-header-small">
                            <span>Verbalize</span>
                          </div>
                          <div className="phone-body-small">
                            <div className="camera-area-small">
                              <div className="camera-icon-small">📹</div>
                              <p className="camera-text-small">Câmera ativa</p>
                              <div className="detection-box-small">
                                <span className="detection-label-small">Detectando sinais...</span>
                              </div>
                            </div>
                          </div>
                          <div className="phone-footer-small">
                            <button
                              className="action-button-small"
                              onClick={handleProcess1}
                              disabled={isProcessing1}
                            >
                              {isProcessing1 ? (
                                <span className="spinner-border spinner-border-sm" role="status"></span>
                              ) : '📹 Iniciar'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-output-large">
                      <p className="output-label-large">Tradução:</p>
                      <p className="output-text-large">
                        {isProcessing1 ? (
                          <span className="processing-dots">Processando</span>
                        ) : outputText1 || 'Aguardando sinais...'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tela 2 - Voz → Libras */}
              <div className="demo-section">
                <div className="demo-header">
                  <h3>Tela 2</h3>
                  <p className="demo-subtitle">Voz → Libras</p>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <div className="text-output-large">
                      <p className="output-label-large">Tradução em Libras:</p>
                      <p className="output-text-large sign-text-large">
                        {isProcessing2 ? (
                          <span className="processing-dots">Processando</span>
                        ) : outputText2 || 'Aguardando entrada...'}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="phone-mockup-small">
                      <div className="phone-frame-small">
                        <div className="phone-screen-small">
                          <div className="phone-header-small">
                            <span>Verbalize</span>
                          </div>
                          <div className="phone-body-small">
                            <div className="voice-area-small">
                              <div className="mic-icon-small">🎤</div>
                              <p className="voice-text-small">Toque para falar</p>
                              <textarea
                                className="voice-textarea-small"
                                placeholder="Digite ou fale algo..."
                                value={inputText2}
                                onChange={handleInputChange2}
                                rows="2"
                              />
                            </div>
                          </div>
                          <div className="phone-footer-small">
                            <button
                              className="action-button-small"
                              onClick={handleProcess2}
                              disabled={isProcessing2}
                            >
                              {isProcessing2 ? (
                                <span className="spinner-border spinner-border-sm" role="status"></span>
                              ) : '🎤 Iniciar'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveDemo;
