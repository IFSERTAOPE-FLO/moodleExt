<p align="center">
  <a href="https://moodle.org" target="_blank" title="Moodle Website">
    <img src="https://raw.githubusercontent.com/moodle/moodle/main/.github/moodlelogo.svg" alt="Moodle Logo" width="400" height="250">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PHP-8.2+-blue?style=for-the-badge&logo=php">
  <img src="https://img.shields.io/badge/MariaDB-10.11+-orange?style=for-the-badge&logo=mariadb">
  <img src="https://img.shields.io/badge/Apache-2.4+-red?style=for-the-badge&logo=apache">
  <img src="https://img.shields.io/badge/Composer-2.x-black?style=for-the-badge&logo=composer">
</p>

<h1 align="center">MoodleExt: AVA IFPE - Campus Floresta</h1>

<p align="center">
  Sistema educacional customizado baseado no Moodle para gestão acadêmica para
  <strong>IFSERTÃO-PE Campus Floresta</strong>. O mesmo foi desenvolvido como um projeto de extensão cujo o intuito era ajudar toda a comunidade acadêmica.
</p>

---

## 📌 Sobre o Projeto:

O **MoodleExt** é uma adaptação do Moodle 5.1.3+ voltada para atender demandas específicas do IFSERTÃO-PE, com foco em:

- Gestão acadêmica centralizada;
- Customização de ambiente educacional;
- Escalabilidade para múltiplos usuários e cursos;
- Organização institucional;

Este projeto demonstra conhecimentos em:

- Arquitetura de sistemas web;
- Configuração de ambiente local (XAMPP);
- Integração com banco de dados;
- Customização de sistemas open source;

---

## 🚀 Tecnologias Utilizadas:

As tecnologias e ferramentas utilizadas para o desenvolvimento e implantação do MoodleExt incluem:

- PHP 8.2+;
- MariaDB 10.11+;
- Apache 2.4+;
- Composer;
- Moodle 5.1.3+;

---

## ⚙️ Pré-requisitos:

Para garantir uma instalação bem-sucedida do MoodleExt, certifique-se de que seu ambiente local atenda aos seguintes requisitos:

| Requisito | Versão mínima |
|----------|--------------|
| PHP      | 8.2+         |
| MariaDB  | 10.11+       |
| Apache   | 2.4+         |
| Composer | 2.x          |

### Extensões PHP obrigatórias

`gd`, `intl`, `sodium`, `zip`, `soap`, `mbstring`, `curl`, `openssl`, `xmlreader`, `xml`, `json`, `fileinfo`, `ctype`, `dom`, `simplexml`, `pcre`, `spl`, `filter`, `hash`, `iconv`, `zlib`

---

## 🛠️ Instalação Completa.

### Pré-requisitos de Sistema:

1. **XAMPP** instalado (Apache + MariaDB + PHP)
2. **Git** instalado para clonar o repositório
3. **Acesso de administrador** na máquina

### Passo 1: Iniciar XAMPP

```bash
# Abrir XAMPP Control Panel
C:\xampp\xampp-control.exe
```

Inicie os serviços:

- ✅ Apache (porta 80)
- ✅ MySQL (porta 3306)

### Passo 2: Clonar o Repositório

```bash
cd C:\xampp\htdocs
git clone https://github.com/IFSERTAOPE-FLO/moodleExt.git
cd moodleExt
```

### Passo 3: Criar Banco de Dados

Execute via terminal:

```bash
C:\xampp\mysql\bin\mysql.exe -u root << EOF
CREATE DATABASE IF NOT EXISTS moodleext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EOF
```

**Ou via PHP CLI:**

```bash
C:\xampp\php\php.exe -r "
\$pdo = new PDO('mysql:host=localhost;charset=utf8mb4', 'root', '');
\$pdo->exec('CREATE DATABASE IF NOT EXISTS moodleext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');
echo 'Banco criado com sucesso!';
"
```

### Passo 4: Configurar Arquivos

```bash
# Copiar arquivo de configuração padrão
copy config-dist.php config.php
```

Edite `config.php` com as seguintes configurações:

```php
<?php
unset($CFG);
global $CFG;
$CFG = new stdClass();

// Diretório raiz
$CFG->dirroot = __DIR__;

// Database
$CFG->dbtype    = 'mariadb';
$CFG->dblibrary = 'native';
$CFG->dbhost    = 'localhost';
$CFG->dbname    = 'moodleext';
$CFG->dbuser    = 'root';
$CFG->dbpass    = '';
$CFG->prefix    = 'mdl_';
$CFG->dboptions = [
    'dbpersist'   => false,
    'dbsocket'    => false,
    'dbport'      => '',
    'dbcollation' => 'utf8mb4_unicode_ci',
];

// Web Location
$CFG->wwwroot   = 'http://localhost/moodleExt';

// Data Files Location
$CFG->dataroot  = 'C:\\moodledata';

// Security
$CFG->admin = 'admin';
$CFG->directorypermissions = 02777;

// Carregar setup
require_once(__DIR__ . '/lib/setup.php');
?>
```

### Passo 5: Criar Diretório de Dados

```bash
mkdir C:\moodledata
```

**Permissões:** Certifique-se de que o Apache tem permissão de escrita na pasta.

### Passo 6: Instalar Dependências (Opcional)

Se tiver Composer instalado globalmente:

```bash
cd C:\xampp\htdocs\moodleExt
composer install
```

### Passo 7: Redirecionar Raiz Web

Modifique o `index.php` na raiz do projeto para redirecionar à pasta `public`:

```php
<?php
header('Location: public/', true, 301);
exit;
?>
```

### Passo 8: Testar Instalação

Execute o teste de validação:

```bash
C:\xampp\php\php.exe -r "
define('CLI_SCRIPT', true);
require_once('C:\\xampp\\htdocs\\moodleExt\\config.php');

try {
    \$pdo = new PDO(
        'mysql:host={$CFG->dbhost};dbname={$CFG->dbname};charset=utf8mb4',
        \$CFG->dbuser,
        \$CFG->dbpass
    );
    echo '✓ Banco de dados conectado com sucesso!';
} catch (PDOException \$e) {
    echo '✗ Erro: ' . \$e->getMessage();
    exit(1);
}
"
```

### Passo 9: Acessar o Instalador

Abra o navegador e acesse:

```
http://localhost/moodleExt/
```

O instalador web do Moodle irá:

1. ✅ Validar a configuração
2. ✅ Criar tabelas no banco de dados
3. ✅ Solicitar dados do usuário administrador
4. ✅ Finalizar a instalação

---

## 🔍 Solução de Problemas

### Erro: "The Moodle root directory must not be publicly accessible"

**Solução:** Certifique-se de que o `index.php` na raiz está redirecionando para `public/`:

```php
<?php
header('Location: public/', true, 301);
exit;
?>
```

### Erro: "MySQL conected not started"

**Solução:** Verifique se o MySQL está rodando:

```bash
tasklist | findstr mysqld
```

Se não estiver, inicie via XAMPP Control Panel.

### Erro: "Call to a member function get_navigation_overflow_state() on null"

**Solução:** O arquivo `lib/setup.php` requer a definição de `CLI_SCRIPT` para scripts de linha de comando:

```php
<?php
define('CLI_SCRIPT', true);
require_once(__DIR__ . '/config.php');
?>
```

### Erro: "Database connection failed"

**Solução:** Verifique as credenciais no `config.php`:

```bash
C:\xampp\mysql\bin\mysql.exe -u root -p
```

Se a senha não for solicitada, deixe `$CFG->dbpass = '';`

---

## ✅ Checklist de Instalação

- [ ] XAMPP instalado e Apache + MySQL rodando
- [ ] Repositório clonado em `C:\xampp\htdocs\moodleExt`
- [ ] Banco de dados `moodleext` criado
- [ ] Arquivo `config.php` configurado
- [ ] Diretório `C:\moodledata` criado
- [ ] `index.php` redirecionando para `public/`
- [ ] Teste de conexão executado com sucesso
- [ ] Navegador acessando `http://localhost/moodleExt/`
- [ ] Instalador web finalizado
- [ ] Login realizado com usuário administrador

---

## 🧱 Estrutura do Projeto:

A estrutura do código foi organizada da seguinte maneira para manter uma arquitetura clara e modular:

```bash
moodleExt/
├── config.php                 # Arquivo de configuração principal (gerado)
├── config-dist.php            # Arquivo de configuração padrão (modelo)
├── index.php                  # Redirecionamento para pasta public/
├── composer.json              # Dependências do Composer
├── composer.lock              # Versões travadas de dependências
├── package.json               # Dependências npm (assets/build)
├── README.md                  # Este arquivo
├── CONTRIBUTING.md            # Guia de contribuição
├── COPYING.txt                # Licença GPLv3
├── githash.php                # Hash do commit Git
├── Gruntfile.js               # Configuração de build (Grunt)
├── phpunit.xml.dist           # Configuração de testes unitários
├── phpcs.xml.dist             # Configuração de padrões de código
│
├── public/                    # Raiz web pública (acessada pelo Apache)
│   ├── index.php              # Ponto de entrada da aplicação
│   ├── install.php            # Instalador web do Moodle
│   ├── config.php             # Carregador de configuração
│   ├── admin/                 # Painel administrativo
│   ├── lib/
│   │   └── setup.php          # Arquivo de inicialização do sistema
│   ├──  mod/                   # Módulos de conteúdo (atividades)
│   ├── theme/                 # Temas do Moodle
│   ├── course/                # Gestão de cursos
│   ├── user/                  # Gestão de usuários
│   ├── grade/                 # Sistema de notas
│   ├── auth/                  # Autenticação
│   ├── blocks/                # Blocos do Moodle
│   ├── cache/                 # Sistema de cache
│   ├── completion/            # Conclusão de atividades
│   ├── group/                 # Gestão de grupos
│   ├── message/               # Sistema de mensagens
│   ├── rating/                # Sistema de classificações
│   ├── tag/                   # Sistema de tags
│   ├── filter/                # Filtros de conteúdo
│   ├── lang/                  # Pacotes de idiomas
│   ├── pix/                   # Imagens e ícones
│   └── ...                    # Outros componentes
│
├── lib/                       # Biblioteca de configuração
│   ├── setup.php              # Redirecionador para public/lib/setup.php
│   ├── behat/                 # Testes BDD (Behat)
│   └── ...                    # Outros componentes de biblioteca
│
├── admin/                     # Scripts administrativos CLI
│   └── cli/                   # Utilitários de linha de comando
│       ├──  install.php        # Instalação via CLI
│       ├──  upgrade.php        # Atualização via CLI
│       ├──  cron.php           # Tarefas agendadas
│       └──  ...                # Outros scripts
│
├──  vendor/                    # Dependências instaladas via Composer
│   └──  autoload.php           # Autoloader PSR-4
│
├──  server/                    # Configurações de servidor
│   └──  mysql/                 # Scripts MySQL (opcional)
│
├──  Doc/                       # Documentação do projeto
│   ├── INSTALL.txt            # Instruções de instalação
│   ├── UPGRADING.md           # Guia de atualização
│   ├── TRADEMARK.txt          # Marcas registradas
│   └── configuracao/          # Documentação de configuração
│
└── .github/                   # Configurações GitHub
    ├──  workflows/             # GitHub Actions CI/CD
    └──  ...                    # Outros arquivos Git
```

### 📋 Descrição dos Diretórios Principais:

Os diretórios foram organizados para separar claramente as responsabilidades e facilitar a manutenção do código:

| Diretório | Descrição |
|-----------|-----------|
| `public/` | **Raiz web pública** - Único diretório acessível via HTTP. Contém toda a interface do Moodle. |
| `lib/` | **Biblioteca do sistema** - Código de suporte e inicialização. |
| `admin/cli/` | **Scripts administrativos** - Utilitários para instalação, atualização e manutenção. |
| `vendor/` | **Dependências Composer** - Bibliotecas PHP externas. |
| `Doc/` | **Documentação** - Guias de instalação e configuração. |

---

## Direitos e Licença:

O MoodleExt é um projeto de código aberto licenciado sob a [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html). Sinta-se à vontade para usar, modificar e distribuir o código, desde que respeite os termos da licença.
Além disso, o projeto é mantido pela comunidade do IFSERTÃO-PE Campus Floresta, e contribuições são feitas de forma colaborativa para garantir a melhoria contínua do sistema.

## Desenvolvido por:

Alunos do IFSERTÃO-PE Campus Floresta-PE, como parte de um projeto de extensão para a comunidade acadêmica. O MoodleExt é resultado de um esforço coletivo para criar uma solução educacional personalizada e eficiente, atendendo às necessidades específicas do instituto.

---

<p align="center">

@2024 MoodleExt - Todos os direitos reservados. Desenvolvido por alunos do IFSERTÃO-PE Campus Floresta-PE.

</p>