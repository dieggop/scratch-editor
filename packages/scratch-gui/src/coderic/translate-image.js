// [Code com Eric] Substitui `lib/libraries/decks/translate-image.js`.
//
// O original importa `en-steps.js` direto e os outros 12 idiomas por import
// dinâmico. Cada um desses arquivos carrega as capturas de tela do passo a
// passo dos tutoriais: 1.444 arquivos, 69 MB dos 83 MB do build — e só ~5 MB
// seriam em português.
//
// Com os tutoriais desligados (ver decks.js), nenhuma dessas imagens é
// exibida. As duas funções continuam existindo com a mesma assinatura para os
// componentes que as importam não precisarem de patch.
const loadImageData = () => {};

const translateImage = () => undefined;

export {loadImageData, translateImage};
