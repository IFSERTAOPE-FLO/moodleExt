# 🛠️ Guia de Desenvolvimento — MoodleExt

Este guia orienta os desenvolvedores sobre como configurar o ambiente, ferramentas de qualidade e o fluxo de trabalho diário.

## 💻 Configuração do Ambiente Local

Para garantir que seu código siga os padrões do projeto, configure seu ambiente conforme abaixo:

### 1. Extensões Recomendadas (VS Code)

*   **PHP Intelephense:** Para autocompletar e análise estática.
*   **ESLint:** Para padronização de JavaScript.
*   **Stylelint:** Para padronização de arquivos SCSS/CSS.
*   **EditorConfig:** Para manter a indentação consistente.

### 2. Automação com Grunt
O projeto utiliza o Grunt para compilar assets. Antes de começar a editar CSS ou JS, execute:

```bash
# Na raiz do projeto
npm install
npx grunt watch
```
Isso fará com que o Grunt monitore alterações nos arquivos `.scss` e `.js` e os recompile automaticamente.

---

## 📝 Padrões de Código

### PHP

*   Siga as [Moodle Coding Style](https://docs.moodle.org/dev/Coding_style).
*   Use indentação de 4 espaços.
*   Sempre adicione docstrings (`/** ... */`) em classes e métodos.

### SCSS/CSS

*   **NUNCA** edite arquivos `.css` diretamente se houver um correspondente `.scss`.
*   Utilize variáveis para cores e espaçamentos (definidas em `theme/boost/scss/moodle/variables.scss`).

### JavaScript

*   Utilize o padrão AMD ou ES6 conforme a versão do Moodle.
*   Evite o uso de jQuery puro, prefira as APIs nativas do Moodle e Web Components quando possível.

---

## 🐞 Depuração (Debugging)

Para visualizar erros detalhados durante o desenvolvimento, adicione estas linhas temporariamente ao seu `config.php`:

```php
@error_reporting(E_ALL | E_STRICT);
@ini_set('display_errors', '1');
$CFG->debug = (E_ALL | E_STRICT);
$CFG->debugdisplay = 1;
```

> **Atenção:** Nunca envie estas configurações para o ambiente de produção.

---

## 🚀 Fluxo de Trabalho (Git)

1.  **Branching:** Crie branches descritivas para cada tarefa (`feat/nome-recurso` ou `fix/bug-id`).
2.  **Linting:** Antes de commitar, rode `npx grunt css` e `npx grunt js` para verificar erros.
3.  **Commits:** Siga rigorosamente o [Padrão de Commits](padrao-commits.md).
4.  **Pull Request:** Submeta seu código para revisão e aguarde a aprovação do time.

---
*Última atualização: Abril de 2026*
