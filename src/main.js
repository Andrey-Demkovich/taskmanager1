import {createControlBtnWrapBlock as createMenuBlock} from "./components/menu.js";
import {createMainSearchBlock as createSearchBlock} from "./components/search.js";
import {createMainFilterBlock as createFilterBlock} from "./components/filter.js";
import {createBoardContainerBlock} from "./components/board-container.js";
import {createCardEditBlock} from "./components/card-edit.js";
import {createCardBlock} from "./components/card.js";
import {createLoadMoreBlock} from "./components/load-more.js";
import {getTask} from "./components/data.js";

export {shuffle} from "./components/utils.js";
export {randomInteger} from "./components/utils.js";

export const TOTAL_TASK = 3;

const renderHtmlBlock = (block, elementToInsert) =>
  elementToInsert.insertAdjacentHTML(`beforeend`, block);

const renderHtmlMainContainer = () => {
  const mainElement = document.querySelector(`.main`);
  const mainControlElement = mainElement.querySelector(`.main__control`);

  renderHtmlBlock(createMenuBlock(), mainControlElement);
  renderHtmlBlock(createSearchBlock(), mainElement);
  renderHtmlBlock(createFilterBlock(), mainElement);
  renderHtmlBlock(createBoardContainerBlock(), mainElement);
};

const renderHtmlBoardContainer = () => {
  const boardElement = document.querySelector(`.board`);
  const boardTasksElement = boardElement.querySelector(`.board__tasks`);

  renderHtmlBlock(createCardEditBlock(), boardTasksElement);
  for (let i = 0; i < TOTAL_TASK; i++) {
    renderHtmlBlock(createCardBlock(getTask()), boardTasksElement);
  }
  renderHtmlBlock(createLoadMoreBlock(), boardElement);
};

renderHtmlMainContainer();
renderHtmlBoardContainer();
