# Requisitos Gerais — Sertão Conecta

Este documento descreve os requisitos de alto nível para o funcionamento da plataforma **Sertão Conecta**, garantindo que o sistema atenda às necessidades institucionais do IF Sertão-PE e proporcione uma experiência de usuário consistente.

## 1. Requisitos Funcionais

### 1.1 Gestão de Usuários
- **Cadastro e Autenticação**: O sistema deve permitir o login de alunos e servidores através de contas institucionais ou cadastro manual.
- **Perfis de Acesso**:
    - **Administrador**: Controle total do sistema, plugins e usuários.
    - **Professor/Criador**: Gestão de cursos, inserção de conteúdos e acompanhamento de notas.
    - **Aluno**: Acesso a cursos, participação em atividades e visualização de progresso/insígnias.

### 1.2 Gestão Acadêmica
- **Catálogo de Cursos**: Exibição organizada dos cursos disponíveis por categorias.
- **Sistema de Inscrição**: Permitir que alunos se inscrevam em cursos (auto-inscrição ou manual).
- **Emissão de Certificados**: Geração automática de certificados em PDF após a conclusão dos requisitos do curso.

### 1.3 Gamificação (Core)
- **Motor de XP**: Cálculo automático de experiência baseado em interações.
- **Repositório de Insígnias**: Gerenciamento centralizado de badges que podem ser aplicadas em diferentes cursos.
- **Rankings Globais/Locais**: Exibição opcional de liderança para fomentar o engajamento.

## 2. Requisitos Não Funcionais

### 2.1 Acessibilidade
- O sistema deve seguir as diretrizes do **eMAG (Modelo de Acessibilidade em Governo Eletrônico)**.
- Suporte a leitores de tela e navegação por teclado.
- Alto contraste e redimensionamento de fontes sem perda de funcionalidade.

### 2.2 Desempenho e Escalabilidade
- O sistema deve suportar acessos simultâneos de grandes grupos de alunos sem degradação perceptível de performance.
- Tempo de carregamento de páginas otimizado (uso de cache e compressão de assets).

### 2.3 Segurança
- **Backup**: Rotinas diárias de backup do banco de dados e do `moodledata`.
- **Privacidade**: Conformidade com a **LGPD (Lei Geral de Proteção de Dados)** no tratamento de informações dos usuários.
- **Criptografia**: Uso obrigatório de HTTPS em ambiente de produção.

### 2.4 Compatibilidade
- **Responsividade**: Interface adaptável para desktops, tablets e smartphones.
- **Navegadores**: Suporte às versões mais recentes do Chrome, Firefox, Safari e Edge.

## 3. Requisitos Operacionais
- **Ambiente**: Hospedagem em servidor Apache/Nginx com suporte a PHP 8.2+.
- **Banco de Dados**: Uso de MariaDB ou MySQL com collation `utf8mb4_unicode_ci`.
- **Manutenção**: Facilidade de atualização de plugins e do núcleo do Moodle via Git ou CLI.
