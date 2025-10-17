import React from 'react';
import { Shield, Check, Award, Sparkles, TrendingDown, Lock, Play, ShoppingBag, Zap } from 'lucide-react';
import TestimonialCarousel from './components/TestimonialCarousel';
import FAQ from './components/FAQ';
import PurchasePopup from './components/PurchasePopup';
import AnimatedCounter from './components/AnimatedCounter';

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);

  const handleCTA = () => {
    console.log('[LandingReset7] CTA clicked');
    window.location.href = 'https://pay.kirvano.com/a6f07754-397d-4aec-947d-a0458c36cb4d';
  };

  const handlePlayVideo = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement;
    if (video) {
      video.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-orange-50">
      <PurchasePopup />
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 via-rose-100/20 to-amber-100/30 -z-10" />

        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-3 py-2 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">Método Validado por Mais de <AnimatedCounter /> Mulheres</span>
          </div>

          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-gradient-to-br from-orange-200 to-rose-200 rounded-2xl shadow-2xl overflow-hidden">
            <video
              id="hero-video"
              className="w-full h-full object-cover"
              playsInline
              controls={isVideoPlaying}
              poster="https://r2.fivemanage.com/loB7DwO6sLPQ9WKdZy10U/APERTEOPLAY!(4).png"
            >
              <source src="https://r2.fivemanage.com/loB7DwO6sLPQ9WKdZy10U/IMG_5453.mp4" type="video/mp4" />
            </video>
            {!isVideoPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlayVideo}
              >
                <div className="bg-white/90 p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-300">
                  <Play className="w-12 h-12 text-orange-500 fill-orange-500" />
                </div>
              </div>
            )}
          </div>

          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight whitespace-nowrap">
            <span className="text-gray-900">Reset 7 Dias </span>
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Sem Glúten™</span>
          </h1>

          <p className="text-xl md:text-3xl lg:text-4xl text-gray-800 font-semibold leading-snug max-w-4xl mx-auto">
            Acorde 3kg mais leve em <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">7 dias</span> — sem dieta, sem glúten, sem drama.
          </p>

          <div className="bg-rose-50/80 border-l-4 border-rose-400 py-6 px-8 max-w-2xl mx-auto rounded-r-lg shadow-md">
            <p className="text-lg md:text-2xl text-gray-800 italic leading-relaxed">
              Você não tá cansada de se esconder no espelho e fingir que não se importa?
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Verdade Que Ninguém Te Conta
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              Você já se acostumou com a ideia de que... É normal acordar cansada, ter a barriga sempre inchada, viver estufada mesmo sem comer tanto e ainda achar que o problema é você. Mas a real é: <strong>isso virou rotina. Não é normal.</strong>
            </p>
            <p>
              A verdade é que seu corpo tá inflamado.
              E a maior parte disso vem do glúten que tá em quase tudo o que você come, sem você perceber. O problema não é você. É a estrutura alimentar moderna que te sabota todos os dias.
            </p>
            <p className="font-semibold text-orange-600 text-2xl">
              E se em apenas 7 dias você pudesse se reconhecer de novo?
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-orange-50 to-rose-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Você Recebe Hoje
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: <Check className="w-6 h-6" />,
                text: "Cardápio anti-inflamatório pronto + Lista de compras 100% substituível"
              },
              {
                icon: <Check className="w-6 h-6" />,
                text: "Dicas + Substituições + Soluções pra comer fora sem \"recaída\""
              },
              {
                icon: <Check className="w-6 h-6" />,
                text: "70 receitas divididas por objetivos (energia, intestino, ansiedade, leveza)"
              },
              {
                icon: <Check className="w-6 h-6" />,
                text: 'Aula Expressa: "Você Não Sabe o Que o Glúten Tá Fazendo com Você"'
              },
              {
                icon: <Check className="w-6 h-6" />,
                text: "Plano de continuação pra manter resultados depois do reset"
              },
              {
                icon: <Check className="w-6 h-6" />,
                text: "Acesso imediato e vitalício a todo conteúdo"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-orange-500 to-rose-500 text-white p-2 rounded-lg flex-shrink-0">
                  {item.icon}
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                <TrendingDown className="w-4 h-4" />
                OFERTA LIMITADA
              </div>

              <div>
                <p className="text-gray-500 line-through text-2xl mb-2">De R$97,00</p>
                <p className="text-5xl md:text-6xl font-bold text-gray-900">
                  <span className="text-3xl align-top">R$</span>27,90
                </p>
                <p className="text-orange-600 font-semibold text-xl mt-2">Pagamento único</p>
              </div>

              <div className="flex justify-center gap-4 md:gap-6 py-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Compra Segura</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Garantia de 7 Dias</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Lock className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Dados Protegidos</span>
                </div>
              </div>

              <button
                onClick={handleCTA}
                className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-bold text-xl md:text-2xl py-6 px-8 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                QUERO COMEÇAR MEU RESET AGORA
              </button>

              <p className="text-red-600 font-semibold text-sm">
                As vagas são limitadas por lote!
              </p>

              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mt-6">
                <p className="font-bold text-green-800 text-lg mb-2">
                  Garantia de 7 Dias
                </p>
                <p className="text-gray-700">
                  Teste o método por 7 dias. Se não se sentir mais leve, devolvemos 100% do seu dinheiro. Simples assim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="md:whitespace-nowrap">Olha O Que Tá Acontecendo Com Quem Deu O Reset ↓</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">Elas seguiram o Reset por 7 dias. O que aconteceu surpreendeu até elas.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto rounded-full mt-4" />
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-rose-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">Tire suas dúvidas agora</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto rounded-full mt-4" />
          </div>

          <FAQ />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Você Tem Uma Escolha Agora
          </h2>

          <p className="text-lg md:text-xl leading-relaxed">
            Se ignorar isso, em 30 dias vai seguir evitando o espelho, pesada e sem energia.
          </p>

          <p className="text-xl md:text-2xl font-bold">
            Ou dar 7 dias pra si mesma e começar a transformação HOJE.
          </p>

          <button
            onClick={handleCTA}
            className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-xl md:text-2xl py-6 px-12 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            SIM, EU QUERO MUDAR AGORA
          </button>

          <p className="text-sm opacity-90">
            Acesso imediato após o pagamento • Garantia de 7 dias
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl">
                <img
                  src="https://r2.fivemanage.com/loB7DwO6sLPQ9WKdZy10U/Image_fx12.jpg"
                  alt="Dra. Ana Carolina Silva"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Dra. Ana Carolina Silva
              </h3>
              <p className="text-xl text-orange-600 font-semibold">
                Nutricionista Funcional
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Especialista em nutrição anti-inflamatória e criadora do método Reset de 7 Dias Sem Glúten™, validado e aplicado por uma equipe com mais de 5 nutricionistas especialistas em inflamação silenciosa e emagrecimento feminino.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mt-4">
                Mais de 5.000 mulheres já passaram pelo protocolo e viram seus corpos desinchar, a autoestima voltar e o espelho parar de ser um campo de batalha.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <ShoppingBag className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-sm font-medium">Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-sm font-medium">Garantia 7 Dias</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Zap className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-sm font-medium">Acesso Imediato</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 text-sm text-gray-600 space-y-2">
              <p>© 2025 Reset 7 Dias Sem Glúten™ • Todos os direitos reservados</p>
              <div className="flex flex-wrap justify-center gap-4 pt-2">
                <a href="#" className="hover:text-orange-600 transition-colors">Termos de Uso</a>
                <span>•</span>
                <a href="#" className="hover:text-orange-600 transition-colors">Política de Privacidade</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
