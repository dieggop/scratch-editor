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

// [Code com Eric] Strings que o editor usa e que o scratch-l10n não traduz
// para NENHUM idioma — são mensagens novas, que ainda não passaram pelo ciclo
// de tradução do upstream. Sem isto, pedaços do menu aparecem em inglês no
// meio do resto em português (o "Load from your computer" foi o primeiro a
// aparecer num teste com criança).
//
// Conferido com um diff entre os ids usados em src/ e as chaves de pt-br;
// quando o upstream traduzir, a chave daqui passa a ser redundante e pode
// sair — a tradução de verdade tem prioridade, por isso este objeto é
// espalhado ANTES do pt-br.
const faltandoNoUpstream = {
    'gui.aria.aboutMenu': 'Menu Sobre',
    'gui.aria.accountMenu': 'Menu da conta',
    'gui.aria.authorInfo': 'Projeto "{projectTitle}" de {username}',
    'gui.aria.clearButton': 'Limpar',
    'gui.aria.editMenu': 'Menu Editar',
    'gui.aria.fileMenu': 'Menu Arquivo',
    'gui.aria.languageMenu': 'Menu de idioma',
    'gui.aria.modeMenu': 'Menu de modo',
    'gui.aria.settingsMenu': 'Menu Configurações',
    'gui.aria.startProjectButton': 'Começar o projeto',
    'gui.aria.stopProjectButton': 'Parar o projeto',
    'gui.sharedMessages.backdrop': 'cenário{index}',
    'gui.sharedMessages.costume': 'fantasia{index}',
    'gui.sharedMessages.sprite': 'Ator{index}',
    'gui.sharedMessages.pop': 'pop',
    'gui.sharedMessages.replaceProjectWarning': 'Substituir o conteúdo do projeto atual?',
    'gui.sharedMessages.loadFromComputerTitle': 'Carregar do seu computador'
};

export default {
    en: {...enInterface, ...enPaint, ...enExtensions},
    'pt-br': {...faltandoNoUpstream, ...ptInterface, ...ptPaint, ...ptExtensions}
};
