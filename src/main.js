import {STEP_TASK_SHOW} from "./components/constants.js";

import {tasksData, filtersData} from "./components/data.js";

import {createControlBtnWrapBlock as createMenuBlock} from "./components/menu.js";
import {createMainSearchBlock as createSearchBlock} from "./components/search.js";
import {createMainFilterBlock as createFilterBlock} from "./components/filter.js";
import {createBoardContainerBlock} from "./components/board-container.js";
import {createCardEditBlock} from "./components/card-edit.js";
import {createCardBlock} from "./components/card.js";
import {createLoadMoreBlock} from "./components/load-more.js";

const renderHtmlBlock = (block, elementToInsert) =>
  elementToInsert.insertAdjacentHTML(`beforeend`, block);

const renderHtmlMainContainer = () => {
  const mainElement = document.querySelector(`.main`);
  const mainControlElement = mainElement.querySelector(`.main__control`);

  renderHtmlBlock(createMenuBlock(), mainControlElement);
  renderHtmlBlock(createSearchBlock(), mainElement);
  renderHtmlBlock(createFilterBlock(filtersData), mainElement);
  renderHtmlBlock(createBoardContainerBlock(), mainElement);
};

const renderHtmlBoardContainer = () => {
  const boardElement = document.querySelector(`.board`);
  const boardTasksElement = boardElement.querySelector(`.board__tasks`);

  let countTaskShow = STEP_TASK_SHOW;

  renderHtmlBlock(createCardEditBlock(tasksData[0]), boardTasksElement);

  tasksData.slice(1, countTaskShow).forEach((task) => {
    renderHtmlBlock(createCardBlock(task), boardTasksElement);
  });

  renderHtmlBlock(createLoadMoreBlock(), boardElement);
  const LoadMoreElement = document.querySelector(`.load-more`);

  const onLoadMoreClick = () => {
    tasksData
      .slice(countTaskShow, (countTaskShow += STEP_TASK_SHOW))
      .forEach((task) => {
        renderHtmlBlock(createCardBlock(task), boardTasksElement);
      });

    if (countTaskShow >= tasksData.length) {
      LoadMoreElement.style.display = `none`;
      LoadMoreElement.removeEventListener(`click`, onLoadMoreClick);
    }
  };

  LoadMoreElement.addEventListener(`click`, onLoadMoreClick);
};

renderHtmlMainContainer();
renderHtmlBoardContainer();
