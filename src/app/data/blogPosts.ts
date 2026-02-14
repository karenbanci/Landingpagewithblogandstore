export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  verse: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "A Força na Adversidade",
    excerpt:
      "Nos momentos difíceis, é quando nossa fé é verdadeiramente testada e fortalecida.",
    content: `
      <p>A vida cristã não é isenta de desafios. Pelo contrário, Jesus nos advertiu que no mundo teríamos aflições. No entanto, Ele também nos deixou uma promessa: "Tende bom ânimo, eu venci o mundo" (João 16:33).</p>
      
      <p>Quando passamos por momentos difíceis, é natural questionar onde Deus está. Mas é exatamente nesses momentos que nossa fé é moldada e fortalecida. Como ouro refinado no fogo, nossas provações nos purificam e nos aproximam de Cristo.</p>
      
      <p>O apóstolo Paulo nos ensina em Romanos 5:3-4: "E não somente isto, mas também nos gloriamos nas tribulações, sabendo que a tribulação produz a paciência, e a paciência a experiência, e a experiência a esperança."</p>
      
      <h3>Reflexão:</h3>
      <p>Que desafio você está enfrentando hoje? Como você pode ver a mão de Deus trabalhando através dessa situação? Lembre-se: Deus nunca nos abandona, e cada prova é uma oportunidade de crescimento.</p>
      
      <h3>Oração:</h3>
      <p>Senhor, nos momentos de tribulação, ajuda-me a confiar em Ti. Que eu possa ver além das circunstâncias e perceber Teu amor e cuidado. Fortalece minha fé e usa estas provações para me tornar mais semelhante a Jesus. Amém.</p>
    `,
    date: "2026-02-10",
    imageUrl:
      "https://images.unsplash.com/photo-1534297169727-a78dc2d3dea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBkZXZvdGlvbmFsJTIwYmlibGUlMjByZWFkaW5nfGVufDF8fHx8MTc3MTA0OTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    verse: "João 16:33",
  },
  {
    id: "2",
    title: "O Poder da Gratidão",
    excerpt:
      "Aprender a ser grato em todas as circunstâncias transforma nossa perspectiva de vida.",
    content: `
      <p>A gratidão é uma das práticas mais transformadoras da vida cristã. Quando escolhemos agradecer a Deus em todas as circunstâncias, nossa perspectiva muda completamente.</p>
      
      <p>A Bíblia nos ensina em 1 Tessalonicenses 5:18: "Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco." Note que não diz "por tudo", mas "em tudo". Mesmo nas dificuldades, podemos encontrar motivos para agradecer.</p>
      
      <p>Quando praticamos a gratidão, nosso coração se enche de alegria. Começamos a notar as pequenas bênçãos diárias: o ar que respiramos, o alimento na mesa, a família, os amigos, a salvação em Cristo.</p>
      
      <h3>Desafio Prático:</h3>
      <p>Hoje, escreva uma lista de 10 coisas pelas quais você é grato. Podem ser grandes ou pequenas. Compartilhe essa gratidão com Deus em oração e veja como isso transforma seu dia.</p>
      
      <h3>Oração:</h3>
      <p>Pai celestial, obrigado por Tuas incontáveis bênçãos. Ajuda-me a ter um coração grato, mesmo nas dificuldades. Que minha vida seja um testemunho de gratidão e louvor a Ti. Em nome de Jesus, amém.</p>
    `,
    date: "2026-02-08",
    imageUrl:
      "https://images.unsplash.com/photo-1589878607855-a186f7e43dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGNocmlzdGlhbiUyMHdvcnNoaXB8ZW58MXx8fHwxNzcxMDQ5OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    verse: "1 Tessalonicenses 5:18",
  },
  {
    id: "3",
    title: "Vivendo em Comunhão",
    excerpt:
      "A importância da comunidade cristã na jornada de fé e crescimento espiritual.",
    content: `
      <p>Deus nos criou para a comunhão. Desde o início, Ele disse: "Não é bom que o homem esteja só" (Gênesis 2:18). Essa necessidade de comunidade se estende à nossa vida espiritual.</p>
      
      <p>Hebreus 10:24-25 nos instrui: "E consideremo-nos uns aos outros, para nos estimularmos ao amor e às boas obras, não deixando a nossa congregação, como é costume de alguns, antes admoestando-nos uns aos outros."</p>
      
      <p>A comunhão com outros cristãos não é opcional - é essencial para nosso crescimento espiritual. Quando nos reunimos, compartilhamos nossas lutas, celebramos vitórias, oramos uns pelos outros e nos edificamos mutuamente na fé.</p>
      
      <h3>Benefícios da Comunhão:</h3>
      <ul>
        <li>Encorajamento mútuo nas dificuldades</li>
        <li>Crescimento através do compartilhamento de experiências</li>
        <li>Responsabilidade e prestação de contas</li>
        <li>Oportunidades de servir e usar nossos dons</li>
      </ul>
      
      <h3>Reflexão:</h3>
      <p>Como está sua vida em comunidade? Você tem cultivado relacionamentos profundos com outros cristãos? Se não, que passo você pode dar hoje para mudar isso?</p>
      
      <h3>Oração:</h3>
      <p>Senhor, obrigado pela família da fé. Ajuda-me a valorizar a comunhão com meus irmãos e irmãs em Cristo. Que eu seja fonte de encorajamento e que também receba o apoio de que preciso. Amém.</p>
    `,
    date: "2026-02-05",
    imageUrl:
      "https://images.unsplash.com/photo-1534297169727-a78dc2d3dea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBkZXZvdGlvbmFsJTIwYmlibGUlMjByZWFkaW5nfGVufDF8fHx8MTc3MTA0OTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    verse: "Hebreus 10:24-25",
  },
];
