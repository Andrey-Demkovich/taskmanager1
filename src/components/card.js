import {shuffle} from "../main.js";
import {randomInteger} from "../main.js";

export const createCardBlock = (task) => `<article class="card card--${
  task.color
}">
  <div class="card__form">
    <div class="card__inner">
      <div class="card__control">
        <button type="button" class="card__btn card__btn--edit">
          edit
        </button>
        <button type="button" class="card__btn card__btn--archive">
          archive
        </button>
        <button
          type="button"
          class="card__btn card__btn--favorites card__btn--disabled"
        >
          favorites
        </button>
      </div>

      <div class="card__color-bar">
        <svg class="card__color-bar-wave" width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
      </div>

      <div class="card__textarea-wrap">
        <p class="card__text">${task.description}</p>
      </div>

      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            <div class="card__date-deadline">
              <p class="card__input-deadline-wrap">
                <span class="card__date">${new Date(
      task.dueDate
  ).getDate()}.${new Date(task.dueDate).getMonth()}.${new Date(
    task.dueDate
).getFullYear()}</span>
                <span class="card__time">${new Date(
      task.dueDate
  ).getHours()}:${new Date(task.dueDate).getMinutes()}</span>
              </p>
            </div>
          </div>

          <div class="card__hashtag">
            <div class="card__hashtag-list">
              ${createHashTagsElements(task)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>`;

const createHashTagsElements = (task) => {
  const tagsShuffleTrim = shuffle([...task.tags]).slice(0, randomInteger(0, 3));
  const tagsElements = tagsShuffleTrim
    .map(
        (it) =>
          `<span class="card__hashtag-inner">
    <span class="card__hashtag-name">
      #${it}
    </span>
  </span>`
    )
    .join(``);

  return tagsElements;
};
