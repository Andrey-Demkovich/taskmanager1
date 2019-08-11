import {createControlBtnWrapBlock as createMenuBlock} from "./components/menu.js";
import {createMainSearchBlock as createSearchBlock} from "./components/search.js";
import {createMainFilterBlock as createFilterBlock} from "./components/filter.js";
import {createBoardContainerBlock} from "./components/board-container.js";
import {createCardEditBlock} from "./components/card-edit.js";
import {createCardBlock} from "./components/card.js";
import {createLoadMoreBlock} from "./components/load-more.js";

const mainElement = document.querySelector(`.main`);
const mainControlElement = mainElement.querySelector(`.main__control`);

const renderHtmlBlock = (block, elementToInsert) => {
  elementToInsert.insertAdjacentHTML(`beforeend`, block);
};

renderHtmlBlock(createMenuBlock(), mainControlElement);
renderHtmlBlock(createSearchBlock(), mainElement);
renderHtmlBlock(createFilterBlock(), mainElement);
renderHtmlBlock(createBoardContainerBlock(), mainElement);

const boardElement = mainElement.querySelector(`.board`);
const boardTasksElement = boardElement.querySelector(`.board__tasks`);

renderHtmlBlock(createCardEditBlock(), boardTasksElement);

for (let i = 0; i < 3; i++) {
  renderHtmlBlock(createCardBlock(), boardTasksElement);
}
renderHtmlBlock(createLoadMoreBlock(), boardElement);
