export const Article = () => {
  return (
    <section className="article">
      <h2 className="title article__title">IA na Educação</h2>
      <div className="article__container">
        <article>
          <h3 className="title article__subtitle">Intrudução</h3>
          <p className="text article__text">
            Hackathon é um projeto multidisciplinar na área de tecnologia, feito
            tanto por instituições da área da educação quanto por empresas para
            obter novas ideias e revolucionar o mercado. Suas únicas regras são
            trabalhar por um tempo limitado somente em projetos novos e
            criativos que que não estejam relacionados ao dia a dia da empresa
            ou da instituição. Muitas coisas que já estão presentes no nosso
            cotidiano foram criadas em hackathon. Em 2013 o Facebook realizou
            hackathons para a melhoria de sua plataforma e consequentemente da
            empresa, funções como 1álbuns compartilhados, figurinhas de like e
            climas nos eventos foram uma das ideias implementadas deste
            hackathon. Até mesmo o botão “curtir” saíram destas maratonas. Seus
            benefícios são incontáveis.
          </p>
        </article>
        <article>
          <h3 className="title article__subtitle">Objetivo/Problemática</h3>
          <p className="text article__text">
            A organização Sons of Node defende o avanço da IA (explicar melhor a
            opinião do grupo) e tem como objetivo aprofundar o tema em relação a
            educação, combatendo o problema de formação de alunos do ensino
            médio sem de fato ter o coao aluno descrevendo pontos que ele
            precnhecimento esperado da Base Nacional Comum Curricular.
          </p>
        </article>
        <article>
          <h3 className="title article__subtitle">O Produto</h3>
          <p className="text article__text">
            Nosso projeto consiste em fazer uma análise exploratória de dados
            sobre o desempenho dos alunos em todo o Brasil, usando como métrica
            o Exame Nacional do Ensino Médio (ENEM), a partir disso tendo noção
            do desempenho por sexo, idade, raça e até por tipo de escola, se é
            pública ou particular. Desta forma, a área de web irá criar um site
            com a apresentação dos dados e com uma prova geral (desenvolvida por
            IA) sobre a matéria escolhida, gerando ao final dela um feedback
            personalizado ao aluno descrevendo pontos que ele precisa melhorar
            para ter o total compreendimento da matéria, para desenvolver a
            educação brasileira como um todo, podendo assim ser facilmente
            escalável e tendo tanto escolas como o próprio governo como
            possíveis clientes
          </p>
        </article>
        <article>
          <h3 className="title article__subtitle">Quais dados possuímos?</h3>
          <p className="text article__text">
            Como dito anteriormente, nós da Sons of Node utilizamos dados do
            ENEM, disponibilizado pelo próprio governo brasileiro. Tendo em si
            uma vasta gama de dados sabendo todo o background do aluno. Desde o
            sexo, idade, raça, qual a situação de conclusão do ensino médio,
            estado civil, se estudou em escola pública ou privada e etc.
            (opinião da descrição)
          </p>
        </article>
        <article>
          <h3 className="title article__subtitle">O que fizemos?</h3>
          <p className="text article__text">
            Começamos nossa análise com uma bela ‘limpeza’ dos dados, pois muita
            coisa encontrada era desnecessária na nossa análise, além de deixar
            o dataframe mais pesado e lento ao trabalhar com ele. Tinham colunas
            que havia mais de 70% de dados ausentes por exemplo, então
            resolvemos tirar elas para facilitar nossa análise já que não eram
            colunas do nosso ‘foco’. Após a limpeza começamos a famosa AED,
            análise exploratória de dados.
          </p>
        </article>
        <article>
          <h3 className="title article__subtitle">O que fizemos?</h3>
          <p className="text article__text">
            Começamos nossa análise com uma bela ‘limpeza’ dos dados, pois muita
            coisa encontrada era desnecessária na nossa análise, além de deixar
            o dataframe mais pesado e lento ao trabalhar com ele. Tinham colunas
            que havia mais de 70% de dados ausentes por exemplo, então
            resolvemos tirar elas para facilitar nossa análise já que não eram
            colunas do nosso ‘foco’. Após a limpeza começamos a famosa AED,
            análise exploratória de dados.
          </p>
        </article>
        <article>
          <h3 className="title article__subtitle">Materiais e Métodos</h3>
          <p className="text article__text">
            O pensamento geral do grupo desde o princípio sempre foi defender o
            avanço da inteligência artificial no campo da educação. O foco
            escolhido foi o desempenho dos estudantes do ensino médio
            brasileiro. Acreditamos que fornecer mais conhecimento e direção aos
            jovens brasileiros pode elevar o índice de educação no país. Para
            mensurar o desempenho, utilizamos dados do ENEM de 2022,
            disponibilizados pelo governo brasileiro. O conjunto original de
            dados continha mais de 3 milhões de linhas e após limpeza,
            elaboramos nosso dicionário para análise.
          </p>
        </article>

        <article>
          <h3 className="title article__subtitle">
            Análise exploratória dos dados
          </h3>
          <p className="text article__text">
            Realizamos uma análise exploratória dos dados do ENEM, oferecendo
            insights sobre o desempenho dos alunos considerando variáveis como
            sexo, idade, raça, e tipo de escola. Esta análise inclui
            visualizações que dão um contexto mais amplo e permitem tirar
            conclusões. Outras explorações podem ser realizadas no conjunto de
            dados, ampliando o entendimento sobre a performance estudantil e
            áreas de atuação.
          </p>
        </article>

        <article>
          <h3 className="title article__subtitle">Resultados e Conclusões</h3>
          <p className="text article__text">
            Através da análise dos dados, identificamos padrões e tendências
            relacionados ao desempenho dos alunos. Algumas ideias foram aceitas
            e outras refutadas. Como próximos passos, pretendemos aprofundar a
            análise, investigar outras métricas e buscar implementar soluções
            baseadas nos insights adquiridos.
          </p>
        </article>

        <article>
          <h3 className="title article__subtitle">Referências</h3>
          <ul>
            <li className="text article__text">
              <a
                className="link text"
                href="https://www.techtudo.com.br/noticias/2014/01/sete-ideias-do-facebook-que-viraram-produtos-em-hackathons-de-2013.ghtml"
              >
                TechTudo: Ideias do Facebook em Hackathons de 2013
              </a>
            </li>
            <li className="text article__text">
              <a
                className="link text"
                href="https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/enem"
              >
                Dados abertos ENEM
              </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
