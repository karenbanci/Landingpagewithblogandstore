export interface Produto {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  features: string[];
}

export const produtos: Produto[] = [
  {
    id: "1",
    name: "Planner Devocional 2026",
    description:
      "Organize sua vida espiritual com nosso planner devocional completo para o ano de 2026.",
    price: 89.9,
    imageUrl:
      "https://images.unsplash.com/photo-1703861238419-fdea58d243d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBwbGFubmVyJTIwam91cm5hbCUyMG5vdGVib29rfGVufDF8fHx8MTc3MTA0OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "365 dias de devocionais",
      "Espaço para anotações diárias",
      "Versículos diários",
      "Planos de leitura bíblica",
      "Páginas para pedidos de oração",
    ],
  },
  {
    id: "2",
    name: "Diário de Gratidão Cristão",
    description:
      "Cultive um coração grato com este diário especialmente desenhado para cristãos.",
    price: 49.9,
    imageUrl:
      "https://images.unsplash.com/photo-1703861238419-fdea58d243d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBwbGFubmVyJTIwam91cm5hbCUyMG5vdGVib29rfGVufDF8fHx8MTc3MTA0OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Prompts diários de gratidão",
      "Versículos sobre gratidão",
      "Reflexões semanais",
      "Design inspirador",
      "Papel de alta qualidade",
    ],
  },
  {
    id: "3",
    name: "Planner de Oração",
    description:
      "Organize e acompanhe suas orações com este planner dedicado à vida de oração.",
    price: 59.9,
    imageUrl:
      "https://images.unsplash.com/photo-1703861238419-fdea58d243d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBwbGFubmVyJTIwam91cm5hbCUyMG5vdGVib29rfGVufDF8fHx8MTc3MTA0OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Listas de pedidos de oração",
      "Rastreamento de respostas",
      "Guias de oração temática",
      "Versículos sobre oração",
      "Espaço para reflexões",
    ],
  },
  {
    id: "4",
    name: "Kit Completo de Planejamento Espiritual",
    description:
      "O kit definitivo para quem quer levar sua vida devocional a sério. Inclui todos os nossos planners.",
    price: 179.9,
    imageUrl:
      "https://images.unsplash.com/photo-1703861238419-fdea58d243d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBwbGFubmVyJTIwam91cm5hbCUyMG5vdGVib29rfGVufDF8fHx8MTc3MTA0OTkyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Planner Devocional 2026",
      "Diário de Gratidão",
      "Planner de Oração",
      "Marcadores de página exclusivos",
      "Desconto especial no kit",
    ],
  },
];
