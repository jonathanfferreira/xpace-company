import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { InstitutionalLayout } from '../components/InstitutionalLayout';

export const Privacy: React.FC = () => (
  <InstitutionalLayout>
    <SEO
      title="Política de Privacidade — XPACE"
      description="Informações sobre privacidade, tratamento de dados de contato e atendimento na XPACE, inclusive pelo Instagram."
      keywords="privacidade xpace, lgpd xpace, dados pessoais, instagram xpace, exclusão de dados"
    />
    <article className="max-w-3xl mx-auto">
      <div className="mb-10">
        <span className="font-tech text-secondary tracking-widest text-sm uppercase">Transparência & Dados</span>
        <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight mt-2 mb-4">
          Política de Privacidade
        </h1>
        <p className="text-gray-400 text-sm">
          Última atualização: outubro de 2026
        </p>
      </div>


      <div className="space-y-8 text-gray-300 normal-case leading-relaxed text-base">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-2">1. Quem somos</h2>
          <p>
            A XPACE (XPACE Escola de Dança / XPACE Company) é uma organização voltada à formação artística,
            ensino de dança e produção cultural, sediada em Joinville/SC e operada pela Movida Capacitação e
            Eventos Ltda.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-2">2. Quais dados coletamos</h2>
          <p className="mb-3">
            Coletamos apenas os dados estritamente necessários para viabilizar nosso atendimento inicial, conforme os formulários preenchidos voluntariamente pelo usuário:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-gray-300">
            <li><strong>Nome completo ou primeiro nome:</strong> para identificação no atendimento;</li>
            <li><strong>Número de WhatsApp / Telefone:</strong> para resposta, confirmação de contato e agendamento de aulas;</li>
            <li><strong>E-mail (quando informado):</strong> para esclarecimento de dúvidas e envio de informações;</li>
            <li><strong>Modalidade de interesse ou respostas do Quiz:</strong> para recomendar turmas compatíveis;</li>
            <li><strong>Dados técnicos de atribuição e navegação:</strong> identificador anônimo de requisição, parâmetros de campanha (UTMs), página de origem e data/hora do envio, utilizados para métricas de desempenho de canais.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-2">3. Para que utilizamos seus dados</h2>
          <p>
            Os dados fornecidos são utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 mt-2">
            <li>Retornar contato solicitado pelo usuário sobre aulas, modalidades e horários;</li>
            <li>Agendar aulas experimentais na XPACE Escola de Dança;</li>
            <li>Esclarecer dúvidas submetidas via formulário de contato ou quiz de estilo;</li>
            <li>Prevenir envios abusivos ou automatizados (spam).</li>
          </ul>
          <p className="mt-3">
            A XPACE não comercializa, não aluga e não repassa seus dados pessoais a terceiros para finalidades publicitárias não autorizadas.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-2">4. Comunicação via WhatsApp</h2>
          <p>
            Ao preencher nosso formulário de contato ou quiz interativo e informar seu número de telefone,
            você manifesta ciência e autorização para que a equipe pedagógica e de atendimento da XPACE
            entre em contato por WhatsApp ou ligação para dar andamento ao seu atendimento.
          </p>
        </section>

        <section id="instagram">
          <h2 className="font-display text-xl font-bold text-white mb-2">5. Atendimento pelo Instagram</h2>
          <p className="mb-3">
            Quando você comenta uma publicação ou envia uma mensagem direta ao perfil @xpaceescoladedanca,
            recebemos, por meio da API oficial do Instagram (Meta), as informações que você mesmo envia:
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>seu identificador e nome de usuário no Instagram;</li>
            <li>o texto do comentário ou da mensagem e a data e hora do envio.</li>
          </ul>
          <p className="mt-3 mb-3">Usamos esses dados para:</p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>responder dúvidas sobre aulas, modalidades, horários e valores;</li>
            <li>enviar o link para agendar uma aula experimental;</li>
            <li>registrar seu interesse no cadastro de interessados da escola, para que a equipe retorne o contato.</li>
          </ul>
          <p className="mt-3">
            As respostas podem ser automáticas, inclusive com apoio de inteligência artificial. Você pode pedir a
            qualquer momento para falar com uma pessoa da equipe e, se preferir, escrever PARAR para interromper
            as respostas automáticas. Não pedimos senha nem dados sensíveis (como saúde ou documentos) pelo direct.
            Para menores de idade, o atendimento de matrícula é feito com o responsável.
          </p>
          <p className="mt-3">
            O Instagram é operado pela Meta, que trata os dados conforme as próprias políticas. Não temos acesso à
            sua senha. Para remover seus dados, veja a página{' '}
            <Link to="/exclusao-de-dados" className="text-secondary hover:underline">Exclusão de dados</Link>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-2">6. Armazenamento e segurança</h2>
          <p>
            Os dados recebidos são armazenados em ambiente seguro em nuvem (por exemplo, Google Cloud / Firebase e
            os provedores de infraestrutura do sistema de gestão da escola), com regras restritas de acesso e
            controles de autenticação destinados a resguardar a integridade e confidencialidade das informações.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-2">7. Seus direitos como titular</h2>
          <p>
            Você tem o direito de solicitar, a qualquer momento:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 mt-2">
            <li>Confirmação sobre a existência de tratamento dos seus dados de contato;</li>
            <li>Atualização ou correção de dados incompletos ou inexatos;</li>
            <li>Exclusão dos seus dados de nossa base de contatos ativos para novas mensagens, inclusive das conversas do Instagram (veja <Link to="/exclusao-de-dados" className="text-secondary hover:underline">Exclusão de dados</Link>);</li>
            <li>Atendimento por uma pessoa em vez de respostas automáticas.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-2">8. Como entrar em contato</h2>
          <p>
            Para exercer seus direitos de titular ou sanar qualquer dúvida referente ao tratamento de seus dados na XPACE,
            entre em contato diretamente com a nossa equipe:
          </p>
          <div className="mt-4 p-4 rounded-xl border border-white/10 bg-black/30 text-sm">
            <p className="text-white font-bold">XPACE Escola de Dança</p>
            <p className="text-gray-400">Joinville - SC</p>
            <p className="text-gray-300 mt-2">
              Atendimento WhatsApp:{' '}
              <a
                href="https://wa.me/554791700812"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                (47) 9170-0812
              </a>
            </p>
            <p className="text-gray-300 mt-1">
              Instagram:{' '}
              <a
                href="https://www.instagram.com/xpaceescoladedanca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                @xpaceescoladedanca
              </a>
            </p>
          </div>
        </section>

        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <Link to="/dance" className="text-sm font-bold text-secondary hover:underline">
            ← Voltar para XPACE Escola de Dança
          </Link>
          <Link to="/" className="text-sm text-gray-400 hover:text-white">
            Início XPACE Company
          </Link>
        </div>
      </div>
    </article>
  </InstitutionalLayout>
);

export default Privacy;
