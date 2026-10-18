import {buildInitialState} from './reducers/gui';
import {legacyConfig} from './legacy-config';

export {default} from './containers/gui.jsx';
export {default as GUIComponent} from './components/gui/gui.jsx';
export {default as AppStateHOC} from './lib/app-state-hoc.jsx';
export {setAppElement} from 'react-modal';

// [Code com Eric] AppStateHOC monta a EditorState por dentro e não repassa
// `locale`, então quem embute o editor por este entrypoint fica preso ao
// idioma do navegador — não dá para abrir sempre em português.
//
// Estes dois já são exportados pelo entrypoint standalone; expor aqui também
// permite construir a EditorState com o locale desejado (e ter a store à mão
// para despachar as ações de project-state) sem trazer o React embutido do
// bundle standalone.
export {EditorState, type EditorStateParams} from './lib/editor-state';
export {AppStateProviderHOC} from './lib/app-state-provider-hoc';

export {legacyConfig};
export const guiInitialState = buildInitialState(legacyConfig);

export * from './exported-reducers';
