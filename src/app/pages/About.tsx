import { Heart, BookOpen, Users, Target } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="bg-amber-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-xl text-amber-100">
            Compartilhando a Palavra de Deus e transformando vidas através de devocionais diários
          </p>
        </div>
      </section>

      {/* Missão */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="size-8 text-amber-700" />
              <h2 className="text-3xl font-bold text-slate-800">Nossa Missão</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Nossa missão é proporcionar momentos diários de reflexão e conexão com Deus através 
              de devocionais inspiradores, versículos bíblicos e orações que fortaleçam a fé e 
              transformem vidas.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Acreditamos que a Palavra de Deus tem o poder de renovar mentes, curar corações e 
              guiar passos. Por isso, nos dedicamos a criar conteúdo que nutre a alma e aproxima 
              as pessoas do amor de Cristo.
            </p>
          </div>

          {/* Valores */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <Heart className="size-12 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Amor</h3>
              <p className="text-slate-600">
                Compartilhamos o amor de Cristo em tudo que fazemos, acolhendo a todos com 
                compaixão e graça.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="size-12 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Verdade</h3>
              <p className="text-slate-600">
                Fundamentamos nosso conteúdo nas Sagradas Escrituras, mantendo fidelidade à 
                Palavra de Deus.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <Users className="size-12 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Comunidade</h3>
              <p className="text-slate-600">
                Construímos uma comunidade de fé onde pessoas se apoiam mutuamente em suas 
                jornadas espirituais.
              </p>
            </div>
          </div>

          {/* História */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Nossa História</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Devocionais Diários nasceu do desejo de criar um espaço onde pessoas pudessem 
              encontrar inspiração e fortalecimento espiritual em meio às demandas do dia a dia. 
              Começamos compartilhando reflexões simples com amigos e familiares, e logo 
              percebemos o impacto transformador que momentos dedicados à Palavra de Deus 
              poderiam ter na vida das pessoas.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Com o tempo, expandimos nossa missão para incluir ferramentas práticas como 
              planners devocionais e diários de gratidão, ajudando nossa comunidade a cultivar 
              uma vida de oração consistente e a reconhecer as bênçãos de Deus diariamente.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Hoje, somos gratos por cada pessoa que se junta a nós nesta jornada de fé. Que 
              Deus continue abençoando este ministério e usando-o para Sua glória!
            </p>
          </div>

          {/* Versículo */}
          <div className="mt-12 bg-amber-50 border-l-4 border-amber-700 p-6 rounded-r-lg">
            <p className="text-xl text-slate-700 italic mb-2">
              "Lâmpada para os meus pés é a tua palavra e luz, para o meu caminho."
            </p>
            <p className="text-amber-800 font-semibold">— Salmos 119:105</p>
          </div>
        </div>
      </section>
    </div>
  );
}
