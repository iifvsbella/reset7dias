import { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';

const BRAZILIAN_FEMALE_NAMES = [
  'Ana Carolina', 'Maria Silva', 'Juliana Santos', 'Fernanda Costa', 'Beatriz Lima',
  'Camila Oliveira', 'Letícia Souza', 'Amanda Pereira', 'Gabriela Alves', 'Patricia Rocha',
  'Renata Ferreira', 'Mariana Dias', 'Carolina Martins', 'Bruna Ribeiro', 'Jessica Araújo',
  'Débora Carvalho', 'Tatiana Gomes', 'Priscila Barbosa', 'Vanessa Rodrigues', 'Luciana Cardoso',
  'Adriana Mendes', 'Daniela Castro', 'Bianca Nascimento', 'Roberta Teixeira', 'Claudia Moreira',
  'Monica Pinto', 'Rafaela Freitas', 'Thais Monteiro', 'Natalia Borges', 'Cristina Ramos',
  'Marcela Cunha', 'Helena Campos', 'Sandra Correia', 'Larissa Duarte', 'Simone Vieira',
  'Paula Rezende', 'Aline Barros', 'Denise Nogueira', 'Elaine Farias', 'Karina Moura',
  'Viviane Lopes', 'Andreia Macedo', 'Fabiana Medeiros', 'Silvia Azevedo', 'Michele Fernandes',
  'Carla Pires', 'Alessandra Batista', 'Joana Xavier', 'Sabrina Guimarães', 'Rita Melo',
  'Flávia Cordeiro', 'Rosana Nunes', 'Veronica Lacerda', 'Luciene Miranda', 'Giovana Torres',
  'Eduarda Cavalcante', 'Isabela Fonseca', 'Lorena Soares', 'Raquel Tavares', 'Sofia Pontes',
  'Talita Viana', 'Mônica Pereira', 'Graziela Andrade', 'Marcia Santana', 'Célia Braga',
  'Natasha Marques', 'Rosangela Silveira', 'Angela Mendonça', 'Elisa Figueiredo', 'Regina Santos',
  'Vânia Almeida', 'Sonia Morais', 'Terezinha Costa', 'Iara Furtado', 'Lúcia Pacheco'
];

export default function PurchasePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [location, setLocation] = useState('');

  const LOCATIONS = ['São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Brasília, DF', 'Curitiba, PR', 'Porto Alegre, RS', 'Salvador, BA', 'Fortaleza, CE', 'Recife, PE', 'Goiânia, GO'];

  useEffect(() => {
    const showPopup = () => {
      const randomName = BRAZILIAN_FEMALE_NAMES[Math.floor(Math.random() * BRAZILIAN_FEMALE_NAMES.length)];
      const randomLocation = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];

      setCurrentName(randomName);
      setLocation(randomLocation);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialDelay = setTimeout(() => {
      showPopup();

      const interval = setInterval(() => {
        showPopup();
      }, Math.random() * 15000 + 10000);

      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(initialDelay);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
      <div className="bg-red-500 text-white rounded-lg shadow-2xl p-3 sm:p-4 max-w-[280px] sm:max-w-sm relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white/80 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-2 sm:gap-3 pr-5 sm:pr-6">
          <div className="bg-white/20 p-1.5 sm:p-2 rounded-full flex-shrink-0">
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">Compra confirmada!</p>
            <p className="text-xs sm:text-sm leading-tight">
              <span className="font-semibold">{currentName}</span> de {location}
            </p>
            <p className="text-[11px] sm:text-xs mt-0.5 sm:mt-1 text-white/90 leading-tight">
              acabou de comprar o Reset 7 Dias Sem Glúten™
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
