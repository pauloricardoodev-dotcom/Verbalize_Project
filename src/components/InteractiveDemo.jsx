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

      <style jsx>{`
        .demo-grid {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .demo-section {
          background: #fff;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .demo-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .demo-header {
          margin-bottom: 25px;
          text-align: center;
        }

        .demo-header h3 {
          margin: 0 0 5px 0;
          color: #333;
          font-size: 24px;
          font-weight: 700;
        }

        .demo-subtitle {
          margin: 0;
          color: #666;
          font-size: 14px;
        }


        .phone-mockup-small {
          max-width: 280px;
          margin: 0 auto;
        }

        .phone-frame-small {
          background: #1a1a1a;
          border-radius: 32px;
          padding: 10px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }

        .phone-screen-small {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          height: 380px;
          display: flex;
          flex-direction: column;
        }

        .phone-header-small {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 15px;
          font-size: 14px;
          font-weight: 600;
          text-align: center;
        }

        .phone-body-small {
          flex: 1;
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .camera-area-small {
          text-align: center;
        }

        .camera-icon-small {
          font-size: 40px;
          margin-bottom: 8px;
        }

        .camera-text-small {
          font-size: 12px;
          color: #6c757d;
          margin-bottom: 12px;
        }

        .detection-box-small {
          border: 2px dashed #007bff;
          border-radius: 6px;
          padding: 15px;
          background: rgba(0, 123, 255, 0.1);
        }

        .detection-label-small {
          font-size: 11px;
          color: #007bff;
          font-weight: 500;
        }

        .voice-area-small {
          text-align: center;
        }

        .mic-icon-small {
          font-size: 40px;
          margin-bottom: 8px;
        }

        .voice-text-small {
          font-size: 12px;
          color: #6c757d;
          margin-bottom: 12px;
        }

        .voice-textarea-small {
          width: 100%;
          border: 1px solid #dee2e6;
          border-radius: 6px;
          padding: 8px;
          font-size: 12px;
          resize: none;
        }

        .voice-textarea-small:focus {
          outline: none;
          border-color: #007bff;
        }

        .phone-footer-small {
          padding: 12px;
          background: #f8f9fa;
          border-top: 1px solid #dee2e6;
        }

        .action-button-small {
          width: 100%;
          padding: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .action-button-small:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .action-button-small:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .text-output-large {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 25px;
          min-height: 180px;
          border: 2px solid #e9ecef;
        }

        .output-label-large {
          font-size: 14px;
          color: #6c757d;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .output-text-large {
          font-size: 18px;
          color: #212529;
          margin: 0;
          line-height: 1.6;
        }

        .sign-text-large {
          font-size: 36px;
        }

        .processing-dots::after {
          content: '...';
          animation: dots 1.5s steps(4, end) infinite;
        }

        @keyframes dots {
          0%, 20% { content: '.'; }
          40% { content: '..'; }
          60%, 100% { content: '...'; }
        }

        .dark-mode .demo-section {
          background: #2d2d2d;
        }

        .dark-mode .demo-header h3 {
          color: #fff;
        }

        .dark-mode .demo-subtitle {
          color: #a0a0a0;
        }

        .dark-mode .text-output-large {
          background: #3d3d3d;
          border-color: #505050;
        }

        .dark-mode .output-text-large {
          color: #e0e0e0;
        }

        .dark-mode .output-label-large {
          color: #a0a0a0;
        }

        .dark-mode .voice-textarea-small {
          background: #3d3d3d;
          border-color: #505050;
          color: #e0e0e0;
        }

        .dark-mode .phone-footer-small {
          background: #3d3d3d;
          border-top-color: #505050;
        }

        .dark-mode .camera-text-small,
        .dark-mode .voice-text-small {
          color: #a0a0a0;
        }

        .dark-mode .detection-box-small {
          background: rgba(0, 123, 255, 0.2);
        }

      `}</style>
    </section>
  );
}

export default InteractiveDemo;
