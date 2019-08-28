import {TOTAL_TASK, MAX_TAG_SHOW} from "./constants.js";
import {shuffle, getRandomInteger, getRandomBoolean} from "./utils.js";

const generateTask = () => {
  const tags = new Set([`homework`, `theory`, `practice`, `intensive`, `keks`]);

  return {
    description: [
      `Learn the theory`,
      `Make homework`,
      `Pass intensively on a hundred`
    ][getRandomInteger(0, 2)],

    dueDate:
      Date.now() +
      1 +
      Math.trunc((Math.random() - 0.5) * 2 * 7) * 24 * 60 * 60 * 1000,

    repeatingDays: {
      Mo: false,
      Tu: false,
      We: false,
      Th: getRandomBoolean(),
      Fr: false,
      Sa: false,
      Su: false
    },

    tags: shuffle([...tags]).slice(0, getRandomInteger(0, MAX_TAG_SHOW)),
    color: [`black`, `yellow`, `blue`, `green`, `pink`][getRandomInteger(0, 4)],
    isFavorite: getRandomBoolean(),
    isArhive: getRandomBoolean()
  };
};

const makeTasks = () => {
  const tasks = [];
  for (let i = 0; i < TOTAL_TASK; i++) {
    tasks.push(generateTask());
  }
  return tasks;
};

const createFilterData = (tasks) => {
  const getOverdueTasks = () =>
    tasks.filter((task) => task.dueDate < Date.now());

  const getTodeyTasks = () =>
    tasks.filter(
        (task) => new Date(task.dueDate).getDate() === new Date().getDate()
    );

  const getFavoritesTasks = () => tasks.filter((task) => task.isFavorite);

  const getRepeatingTasks = () =>
    tasks.filter((task) => Object.values(task.repeatingDays).some((it) => it));

  const getTagsTasks = () => tasks.filter((task) => task.tags.length);

  const getArhiveTasks = () => tasks.filter((task) => task.isArhive);

  return [
    {title: `All`, count: TOTAL_TASK},
    {title: `Overdue`, count: getOverdueTasks().length},
    {title: `Todey`, count: getTodeyTasks().length},
    {title: `Favorites`, count: getFavoritesTasks().length},
    {title: `Repeating`, count: getRepeatingTasks().length},
    {title: `Tags`, count: getTagsTasks().length},
    {title: `Arhive`, count: getArhiveTasks().length}
  ];
};

export const tasksData = makeTasks();
export const filtersData = createFilterData(tasksData);
