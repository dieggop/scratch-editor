// [Code com Eric] Substitui `@tensorflow-models/face-detection` via alias do
// webpack.
//
// A extensão "detecção de rosto" arrasta o TensorFlow.js para dentro do
// bundle: 4,67 MiB dos 16,3 MiB, mais ~14 MB de modelos e WebAssembly do
// MediaPipe. É a maior dependência do editor e não entra em nenhuma aula do
// Code com Eric — além de pedir câmera, o que a gente não quer na experiência
// de uma criança.
//
// A extensão continua registrada no scratch-vm, mas sem o modelo não carrega.
// Como o botão "Adicionar extensão" não é exibido, ela não é alcançável pela
// interface; se alguém chegar nela por outro caminho, falha aqui com uma
// mensagem explícita em vez de quebrar em algum lugar fundo do TensorFlow.
const indisponivel = () => {
    throw new Error('A extensão de detecção de rosto não está disponível nesta versão do editor.');
};

export const SupportedModels = {MediaPipeFaceDetector: 'MediaPipeFaceDetector'};
export const createDetector = indisponivel;
export default {SupportedModels, createDetector};
