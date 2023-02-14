const { contextBridge,ipcRenderer  } = require('electron');
const Sortable = require('sortablejs');


contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
//   ping: () => ipcRenderer.invoke('ping'),
});
var el = document.getElementById('items');
var sortable = Sortable.create(el);