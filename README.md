<p align="center">
  <a href="https://moodle.org" target="_blank" title="Moodle Website">
    <img src="https://raw.githubusercontent.com/moodle/moodle/main/.github/moodlelogo.svg" alt="Moodle Logo" width="120">
  </a>
</p>

<h1 align="center">MoodleExt</h1>

<p align="center">
  Sistema educacional customizado baseado no Moodle para gestão acadêmica no 
  <strong>IFSERTÃO-PE Campus Floresta</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/PHP-8.2+-blue?style=for-the-badge&logo=php">
  <img src="https://img.shields.io/badge/MariaDB-10.11+-orange?style=for-the-badge&logo=mariadb">
  <img src="https://img.shields.io/badge/Apache-2.4+-red?style=for-the-badge&logo=apache">
  <img src="https://img.shields.io/badge/Composer-2.x-black?style=for-the-badge&logo=composer">
</p>

---

## 📌 Sobre o Projeto

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

## 🚀 Tecnologias Utilizadas

- PHP 8.2+  
- MariaDB 10.11+  
- Apache 2.4+  
- Composer  
- Moodle 5.1.3+  

---

## ⚙️ Pré-requisitos

| Requisito | Versão mínima |
|----------|--------------|
| PHP      | 8.2+         |
| MariaDB  | 10.11+       |
| Apache   | 2.4+         |
| Composer | 2.x          |

### Extensões PHP obrigatórias

`gd`, `intl`, `sodium`, `zip`, `soap`, `mbstring`, `curl`, `openssl`, `xmlreader`, `xml`, `json`, `fileinfo`, `ctype`, `dom`, `simplexml`, `pcre`, `spl`, `filter`, `hash`, `iconv`, `zlib`

---

## 🛠️ Instalação

### 1. Clonar o repositório

```bash
cd C:\xampp\htdocs
git clone https://github.com/IFSERTAOPE-FLO/moodleExt.git
cd moodleExt
```

### 2. Instalar dependências

```bash
composer install --no-dev --classmap-authoritative
```

### 3. Criar banco de dados

- **Nome:** `moodleext`  
- **Collation:** `utf8mb4_unicode_ci`  

Ou via terminal:

```bash
C:\xampp\mysql\bin\mysql.exe -u root -e "CREATE DATABASE moodleext DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

### 4. Configuração

```bash
copy config-dist.php config.php
```

Edite o arquivo `config.php`:

```php
$CFG->dbtype    = 'mariadb';
$CFG->dbhost    = 'localhost';
$CFG->dbname    = 'moodleext';
$CFG->dbuser    = 'root';
$CFG->dbpass    = '';
$CFG->prefix    = 'mdl_';
$CFG->wwwroot   = 'http://localhost/moodleExt';
$CFG->dataroot  = 'C:\\moodledata';
```

### 5. Criar diretório de dados

```bash
mkdir C:\moodledata
```

### 6. Configuração do Apache

```apache
Alias /moodleExt "C:/xampp/htdocs/moodleExt/public"

<Directory "C:/xampp/htdocs/moodleExt/public">
    AllowOverride All
    Require all granted
</Directory>
```

### 7. Configuração do PHP

No arquivo `php.ini`:

```ini
extension=gd
extension=intl
extension=sodium
extension=zip
extension=soap

max_input_vars = 5000
zend.exception_ignore_args = On
```

### 8. Verificar versão do MariaDB

```bash
C:\xampp\mysql\bin\mysql.exe -u root -e "SELECT VERSION();"
```

### 9. Executar o sistema

Acesse no navegador:

```
http://localhost/moodleExt/
```

---

## 🧱 Estrutura do Projeto

```bash
moodleExt/
├── config.php
├── config-dist.php
├── composer.json
├── public/
│   ├── index.php
│   ├── admin/
│   ├── mod/
│   ├── theme/
│   └── ...
├── lib/
├── vendor/
└── server/
```

---

## 📄 Licença

Este projeto é baseado no Moodle e distribuído sob a licença:
