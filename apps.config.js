import displayPartner from "./components/apps/partner";
import displayChat from './components/apps/chat';
import displayVsCode from "./components/apps/vscode";
import { displayTerminal } from "./components/apps/terminal";
import { displaySettings } from "./components/apps/settings";
import { displayChrome } from "./components/apps/chrome";
import { displayTrash } from "./components/apps/trash";
import { displayGedit } from "./components/apps/gedit";
import { displayAboutYurii } from "./components/apps/yurii";
import { displayTerminalCalc } from "./components/apps/calc";

const apps = [
  {
    id: "about-Yurii",
    title: "About Yurii",
    icon: "./images/logos/YuriiSachok.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayAboutYurii,
  },
  {
    id: "chrome",
    title: "Google Chrome",
    icon: "./themes/Sachok/apps/chrome.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChrome,
  },
  {
    id: "calc",
    title: "Calc",
    icon: "./themes/Sachok/apps/calc.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminalCalc,
  },
  {
    id: "vscode",
    title: "Visual Studio Code",
    icon: "./themes/Sachok/apps/vscode.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayVsCode,
  },
  {
    id: "chatfi",
    title: "Chat Fi",
    icon: "./themes/Sachok/apps/chat.jpeg",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayChat,
  },
  {
    id: "partner",
    title: "Partner",
    icon: "./themes/Sachok/apps/partner.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: true,
    screen: displayPartner,
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "./themes/Sachok/apps/bash.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displayTerminal,
  },

  {
    id: "settings",
    title: "Settings",
    icon: "./themes/Sachok/apps/gnome-control-center.png",
    disabled: false,
    favourite: true,
    desktop_shortcut: false,
    screen: displaySettings,
  },
  {
    id: "gedit",
    title: "Contact Me",
    icon: "./themes/Sachok/apps/gedit.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: true,
    screen: displayGedit,
  },
  {
    id: "trash",
    title: "Trash",
    icon: "./themes/Sachok/system/user-trash-full.png",
    disabled: false,
    favourite: false,
    desktop_shortcut: false,
    screen: displayTrash,
  },
];

export default apps;
