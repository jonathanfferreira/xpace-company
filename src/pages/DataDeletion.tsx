import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { InstitutionalLayout } from '../components/InstitutionalLayout';

// Página pública exigida pela Meta como "instruções de exclusão de dados" do app de atendimento
// pelo Instagram. Precisa continuar acessível sem login e dizer como o titular pede a remoção.
export const DataDeletion: React.FC = () => (
  <InstitutionalLayout>
    <SEO
      title="Exclusão de Dados — XPACE"
      description="Como pedir a exclusão dos seus dados e das conversas do Instagram com a XPACE."
      keywords="exclusão de dados xpace, instagram xpace, lgpd"
    />
    <article className="max-w-3xl mx-auto">
      <div className="mb-10">
        <span className="font-tech text-secondary tracking-widest text-sm uppercase">Transparência & Dados</span>
        <h1 className="font-display text-3xl sm:text-5xl font-black tracking-tight mt-2 mb-4">
          Exclusão de Dados
        </h1>
        <p className="text-gray-400 text-sm">Última atualização: outubro de 2026</p>
      </div>

      <div className="space-y-8 text-gray-300 normal-case leading-relaxed text-base">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-2">Como pedir a exclusão</h2>
          <p className="mb-3">
            Você pode pedir a exclusão dos seus dados a qualquer momento, por um destes canais, informando seu
            nome de usuário no Instagram e a palavra EXCLUIR:
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>
              WhatsApp:{' '}
              <a
                href="https://wa.me/554791700812"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                (47) 9170-0812
              </a>
              ;
            </li>
            <li>
              Mensagem direta no Instagram:{' '}
              <a
                href="https://www.instagram.com/xpaceescoladedanca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                @xpaceescoladedanca
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-2">O que é excluído</h2>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>as conversas e comentários do Instagram guardados pelo nosso sistema de atendimento;</li>
            <li>seu identificador e nome de usuário do Instagram;</li>
            <li>o cadastro de interessado criado a partir do seu contato, quando você ainda não é aluno.</li>
          </ul>
          <p className="mt-3">
            Podemos manter apenas o que a lei exige ou o que for necessário para cumprir um contrato, como o
            cadastro de quem já se matriculou. Confirmaremos a conclusão ao solicitante pelo mesmo canal do pedido.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-2">Remover o acesso pelo Instagram</h2>
          <p>
            Você também pode retirar a autorização do aplicativo pelo próprio Instagram, em Configurações, na seção
            de aplicativos e sites. Ao fazer isso, o aplicativo deixa de receber novos dados da sua conta.
          </p>
        </section>

        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <Link to="/privacy" className="text-sm font-bold text-secondary hover:underline">
            ← Política de Privacidade
          </Link>
          <Link to="/" className="text-sm text-gray-400 hover:text-white">
            Início XPACE Company
          </Link>
        </div>
      </div>
    </article>
  </InstitutionalLayout>
);

export default DataDeletion;
