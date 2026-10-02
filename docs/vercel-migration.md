# XPACE na Vercel

Projeto: `ecapx/xpace-company`. Repositório conectado: `jonathanfferreira/xpace-company`.
Frontend: React/Vite, `npm run build`, saída `dist`. A raiz mantém a página Company; a escola fica em `/dance`.
`vercel.json` preserva rotas SPA e redireciona `/escola` e `/company`.

## Formulários

`api/leads.ts` executa na Vercel e reaproveita a validação, idempotência e mensageria existentes.
Os contatos novos são arquivos JSON em **Vercel Blob privado**, com criação sem sobrescrita.
O servidor não expõe leitura de contatos ao navegador. O registro do contato precede a mensageria.
`/api/lead` e `/api/quiz` são aliases da mesma função; o payload continua exigindo `leadType`.

Armazenamento separado por ambiente:

- produção: `xpace-company-leads`;
- preview/desenvolvimento: `xpace-company-leads-preview`.

`BLOB_READ_WRITE_TOKEN` é fornecido pela conexão do armazenamento, apenas no servidor.
WhatsApp automático exige `EVOLUTION_API_KEY`, `SERVER_URL`, `EVOLUTION_INSTANCE` e
`LEAD_NOTIFICATION_PHONES`, configurados nas variáveis do servidor na Vercel. Sem credenciais,
os contatos são salvos e a resposta informa `NOT_CONFIGURED`; não há envio automático.
Contatos históricos do Firestore não foram copiados. Consulte novos registros na área Storage da Vercel.

## DNS no Squarespace

Valores conferidos pela Vercel em 2 de outubro de 2026; confira novamente em Settings > Domains se forem alterados.

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | @ | 216.198.79.1 |
| A | @ | 64.29.17.1 |
| CNAME | www | 941a2477a016376f.vercel-dns-017.com |

Substitua o A antigo `199.36.158.100` pelos dois A acima e altere o CNAME `www`.
Mantenha os nameservers atuais, o MX `smtp.google.com` e os registros TXT do domínio/e-mail.
Não cancele Google Workspace nem o registro do domínio. O TTL atual do site é 30 minutos.
Depois valide os dois domínios na Vercel; o domínio ainda atende o hosting antigo até a troca de DNS.

## Verificação

```powershell
npm ci
npm ci --prefix functions
npm test
npm run typecheck
npm run build
```

37 testes, TypeScript e build passaram. Produção e preview ficaram `Ready` na Vercel.
O comando de lint existente do Firebase não executa: falta configuração ESLint.
O build avisa sobre bundle JS maior que 500 kB; otimização não faz parte desta migração.
`npm audit --omit=dev` encontrou 38 alertas na árvore atual (incluindo ferramentas legadas de Firebase).
Não foi executado upgrade automático com quebra de versões.

Em desenvolvimento, `npm run dev` ainda usa o mock local já existente; uma confirmação nesse mock
não prova persistência. Verifique armazenamento real no preview da Vercel.
