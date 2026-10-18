// [Code com Eric] Substitui `scratch-l10n/locales/editor-msgs` via alias do
// webpack (ver webpack.config.js).
//
// O arquivo original é gerado e traz as mensagens do editor nos 80 idiomas
// suportados — cerca de 4,7 MiB do bundle. O Code com Eric abre o editor
// sempre em português do Brasil e não oferece troca de idioma
// (canChangeLanguage={false}), então só `pt-br` é usado de fato. O `en` fica
// porque é o estado inicial do reducer de locales e o destino de fallback
// quando um código de idioma não é reconhecido (ver lib/editor-state.tsx).
//
// O original é a união de interface + paint-editor + extensions (as mensagens
// de `blocks` vão para o scratch-blocks, não para cá). Importar cada arquivo
// direto é o que impede o webpack de arrastar os outros 78 idiomas junto.
import enInterface from 'scratch-l10n/editor/interface/en.json';
import enPaint from 'scratch-l10n/editor/paint-editor/en.json';
import enExtensions from 'scratch-l10n/editor/extensions/en.json';

import ptInterface from 'scratch-l10n/editor/interface/pt-br.json';
import ptPaint from 'scratch-l10n/editor/paint-editor/pt-br.json';
import ptExtensions from 'scratch-l10n/editor/extensions/pt-br.json';

export default {
    en: {...enInterface, ...enPaint, ...enExtensions},
    'pt-br': {...ptInterface, ...ptPaint, ...ptExtensions}
};
