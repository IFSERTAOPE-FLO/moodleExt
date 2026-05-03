# Fase 1 — Base e Diagnóstico (03/05/2026 a 05/05/2026)

Status: `Em andamento`  
Data do diagnóstico: `03/05/2026`

## 1. Escopo Congelado da Entrega de 25/05/2026

Escopo fechado para a entrega:

- Landing Page completa.
- Telas de Login e Cadastro refatoradas.
- Catálogo de cursos + inscrição (auto/manual) + certificado.
- Gamificação mínima (XP, níveis, barra, badges, missões).
- Dashboard interno de curso.
- Acessibilidade base, LGPD e segurança operacional.

Fora do escopo da entrega de 25/05 (pós-entrega):

- Analytics/ML para evasão.
- App mobile customizado.
- Recursos AR e integrações acadêmicas avançadas.

## 2. Checklist Técnico — Estado Atual do Projeto

## 2.1 Estrutura e base Moodle

- [x] Projeto Moodle presente em `public/`.
- [x] Tema customizado encontrado: `theme/sertao`.
- [x] Layout custom de frontpage existe: `public/theme/sertao/layout/frontpage.php`.
- [x] Template da landing existe: `public/theme/sertao/templates/frontpage.mustache`.
- [x] SCSS e AMD do tema existem:
  - `public/theme/sertao/scss/post.scss`
  - `public/theme/sertao/amd/src/init.js`
- [ ] Plugin local custom encontrado em `public/local/` (pasta está vazia).

## 2.2 Funcionalidades com evidência no código

- [x] Landing page iniciada e integrada ao tema.
- [ ] Refatoração explícita de Login/Cadastro no tema `sertao` não identificada.
- [ ] Dashboard interno custom de curso não identificado no tema `sertao`.
- [ ] Evidência de fluxo de certificado custom não identificada nesta varredura inicial.

## 2.3 Gamificação — validação por diretórios

Resultado da checagem dos plugins citados na documentação:

- [ ] `public/blocks/xp` (Level Up) — não encontrado.
- [ ] `public/local/xp` — não encontrado.
- [ ] `public/blocks/completion_progress` — não encontrado.
- [ ] `public/mod/stash` — não encontrado.
- [ ] `public/blocks/stash` — não encontrado.
- [ ] `public/admin/tool/badgr` — não encontrado.
- [ ] `public/mod/game` — não encontrado.

Conclusão técnica:

- No snapshot atual do código, os plugins de gamificação documentados não estão presentes como código instalado.

## 2.4 Bloqueios encontrados

- [ ] Banco de dados indisponível no momento do diagnóstico (`dbconnectionfailed` em bootstrap CLI do Moodle).
  - Impacto: não foi possível confirmar plugins registrados no banco (`mdl_config_plugins`) e versão/estado de instalação.
  - Ação necessária: subir MySQL/MariaDB e repetir validação de plugins instalados.

## 3. Critérios de Aceite por Tela

## 3.1 Landing Page

- [ ] Navbar com logo, menu e CTAs de acesso.
- [ ] Hero com título, subtítulo, CTAs e métricas.
- [ ] Seções: Sobre, cursos em destaque, diferenciais, gamificação e CTA final.
- [ ] Footer com links institucionais.
- [ ] Responsividade validada em mobile/desktop.

## 3.2 Login

- [ ] Campos obrigatórios com validação.
- [ ] Mensagens de erro claras para credenciais inválidas.
- [ ] Link de recuperação de senha funcional.
- [ ] Integração com autenticação Moodle (local/LDAP conforme ambiente).

## 3.3 Cadastro

- [ ] Validação de e-mail.
- [ ] Regra de senha forte.
- [ ] Bloqueio de duplicidade de cadastro.
- [ ] Aceite de termos/LGPD.
- [ ] Fluxo de ativação por e-mail funcional.

## 3.4 Dashboard do curso

- [ ] Progresso geral visível.
- [ ] Nível e XP visíveis.
- [ ] Módulos em fases com status (bloqueado/em curso/concluído).
- [ ] Painel de badges/missões.
- [ ] Atalhos para atividades (quiz, lição, H5P/jogos).

## 4. Critérios de Aceite por Funcionalidade

## 4.1 Acadêmico

- [ ] Catálogo por categoria funcional.
- [ ] Autoinscrição funcional.
- [ ] Inscrição manual funcional.
- [ ] Emissão de certificado PDF condicionada à conclusão.

## 4.2 Gamificação mínima

- [ ] Ganho de XP em ações definidas.
- [ ] Progressão por níveis.
- [ ] Barra de progresso visível por curso.
- [ ] Mínimo de 5 badges por curso modelo.
- [ ] Missões/desbloqueio por conclusão.

## 4.3 Qualidade transversal

- [ ] Acessibilidade base (foco, teclado, contraste, semântica).
- [ ] LGPD (consentimento e política).
- [ ] Segurança operacional (backup e HTTPS em produção).
- [ ] Compatibilidade em Chrome/Firefox/Edge/Safari recentes.

## 5. Próximas Ações Imediatas (para concluir Fase 1)

- Subir serviço MySQL/MariaDB local e repetir varredura de plugins no banco.
- Validar no painel Moodle (`/admin/plugins.php`) se há plugins não versionados no repositório.
- Marcar no plano principal os itens da Fase 1 como concluídos após essa validação final.
