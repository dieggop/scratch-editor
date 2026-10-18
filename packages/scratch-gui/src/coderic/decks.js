// [Code com Eric] Substitui `lib/libraries/decks/index.jsx`.
//
// Os decks são os tutoriais embutidos do Scratch. O índice original importa
// cerca de 190 miniaturas, e o material traz marca e personagens do Scratch.
//
// O Code com Eric não usa esses tutoriais: as aulas são o nosso conteúdo e o
// botão "Tutoriais" sai da barra de menus. Um objeto vazio desliga a
// biblioteca de dicas sem mexer em nenhum componente — todos iteram sobre as
// chaves do objeto.
//
// `CATEGORIES` continua exportado com os mesmos valores porque
// components/library/library.jsx importa esse nome.
export const CATEGORIES = {
    gettingStarted: 'gettingStarted',
    basics: 'basics',
    intermediate: 'intermediate',
    prompts: 'prompts'
};

export default {};
