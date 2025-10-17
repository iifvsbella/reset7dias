import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "E se eu não gostar?",
    answer: "Você tem 7 dias pra testar. Se não curtir, devolvemos 100% do valor. Sem letras miúdas."
  },
  {
    question: "Funciona mesmo sem glúten?",
    answer: "Sim! O glúten causa inflamação silenciosa que retém líquidos e deixa você inchada. Ao eliminar ele por 7 dias, seu corpo desinfla naturalmente e você perde peso de verdade. É ciência, não milagre."
  },
  {
    question: "Não tenho tempo pra cozinhar",
    answer: "O Reset foi feito pra vida real. As receitas levam de 10 a 20 minutos. Você recebe lista de compras pronta e cardápio já montado. É só seguir, sem complicação."
  },
  {
    question: "Vou passar fome?",
    answer: "Nunca. O Reset é sobre comer comida de verdade, não passar fome. Você vai comer bem, ficar satisfeita e ainda assim perder peso. Sem sofrimento."
  },
  {
    question: "E depois dos 7 dias?",
    answer: "Você recebe o Mapa de Continuidade 21 Dias™ pra manter os resultados. Muitas mulheres continuam porque se sentem tão bem que não querem voltar ao glúten."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
          >
            <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
            <ChevronDown
              className={`w-6 h-6 text-orange-500 transition-transform flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="px-6 pb-5 pt-2">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
