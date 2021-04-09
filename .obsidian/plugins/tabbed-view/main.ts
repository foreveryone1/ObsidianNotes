import { Plugin, App, Workspace } from "obsidian";

export default class TabbedView extends Plugin {



async onload() {
  this.registerEvent(this.app.workspace.on('active-leaf-change', this.handleOpen));
  this.registerEvent(this.app.workspace.on('layout-change', this.handleTabs));
};

handleOpen() {
let removeopen = Array.from(app.workspace.activeLeaf.containerEl.parentNode.children);
  removeopen.forEach(node => {
    node.removeClass('stayopen');
  });

app.workspace.activeLeaf.containerEl.addClass('stayopen');

  };

handleTabs() {
var tabwidth = Math.max(app.workspace.rootSplit.containerEl.children.length, app.workspace.rootSplit.containerEl.querySelector('.mod-vertical').children.length);
document.querySelector(':root').style.setProperty('--jstabs', tabwidth - 1);
console.log(tabwidth)
  };

