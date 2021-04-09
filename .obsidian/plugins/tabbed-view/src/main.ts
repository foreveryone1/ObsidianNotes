import { Plugin, App, Workspace } from "obsidian";

export default class TabbedView extends Plugin {



async onload() {
  this.registerEvent(this.app.workspace.on('layout-change', this.handleTabs));
  this.registerEvent(this.app.workspace.on('active-leaf-change', this.handleOpen));
};

onunload() {
let unloadCleaner = Array.from(document.querySelectorAll('.stayopen'));
  unloadCleaner.forEach(node => {
    node.removeClass('stayopen');
  });
};

handleOpen() {
let removeopen = Array.from(app.workspace.activeLeaf.containerEl.parentNode.children);
  removeopen.forEach(node => {
    node.removeClass('stayopen');
  });
app.workspace.activeLeaf.containerEl.addClass('stayopen');

  };

handleTabs() {
let opentabs1 = app.workspace.rootSplit.containerEl.children.length;
let modverticalselector = app.workspace.rootSplit.containerEl.querySelector('.mod-vertical');
if (modverticalselector !== null) {
  var opentabs2 = modverticalselector.children.length);
} else {
  var opentabs2 = 0;
}
let tabwidth = Math.max(opentabs1,opentabs2) - 1;
document.querySelector(':root').style.setProperty('--jstabs', tabwidth);

if (tabwidth > 7) {
document.querySelector(':root').style.setProperty('--rowsjs', 2);
} 
else {
document.querySelector(':root').style.removeProperty('--rowsjs');
}
  };

