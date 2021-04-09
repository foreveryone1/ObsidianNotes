import { Plugin, App, Workspace } from "obsidian";

export default class TabbedView extends Plugin {



async onload() {
  this.registerEvent(this.app.workspace.on('layout-change', this.handleTabs));
  this.registerEvent(this.app.workspace.on('active-leaf-change', this.handleOpen));
};

handleOpen() {
let removeopen = Array.from(app.workspace.activeLeaf.containerEl.parentNode.children);
  removeopen.forEach(node => {
    node.removeClass('stayopen');
  });
app.workspace.activeLeaf.containerEl.addClass('stayopen');

  };

handleTabs() {
var tabwidth = Math.max(app.workspace.rootSplit.containerEl.children.length, app.workspace.rootSplit.containerEl.querySelector('.mod-vertical').children.length) - 1;
document.querySelector(':root').style.setProperty('--jstabs', tabwidth);

if (tabwidth > 8) {
document.querySelector(':root').style.setProperty('--rowsjs', 2);
} 
else {
document.querySelector(':root').style.removeProperty('--rowsjs');
}
  };

