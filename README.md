# Gestão de Obras - Cunha Reparos (GitHub Pages)

Este pacote está pronto para hospedar no **GitHub Pages**.

## Estrutura
- `index.html` (ajustado para usar caminhos relativos do `_sdk`)
- `_sdk/element_sdk.js` (stub para não quebrar no Pages)
- `_sdk/data_sdk.js` (fallback opcional)

## Como publicar
1. Crie um repositório no GitHub.
2. Envie os arquivos do ZIP para a **raiz** do repositório.
3. Vá em **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**
4. Acesse o link gerado.

## Observação sobre dados
Este arquivo já usa **localStorage** para salvar clientes/obras/parcelas/despesas no próprio navegador.
Se abrir em outro aparelho, ele começa vazio (storage é por dispositivo/navegador).
