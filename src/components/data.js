import {randomInteger} from "../main.js";
import {TOTAL_TASK} from "../main.js";

export const getTask = () => ({
  description: [
    `Learn the theory`,
    `Make homework`,
    `Pass intensively on a hundred`
  ][randomInteger(0, 2)],

  dueDate:
    Date.now() +
    1 +
    Math.trunc((Math.random() - 0.5) * 2 * 7) * 24 * 60 * 60 * 1000,
  repeatingDays: {
    Mo: true,
    Tu: false,
    We: true,
    Th: false,
    Fr: false,
    Sa: true,
    Su: false
  },

  tags: new Set([`homework`, `theory`, `practice`, `intensive`, `keks`]),
  color: [`black`, `yellow`, `blue`, `green`, `pink`][randomInteger(0, 4)],
  isFavorite: !!randomInteger(0, 1),
  isArhive: !!randomInteger(0, 1)
});

const MakeFilters = [
  {title: `All`, count: TOTAL_TASK},
  {title: `Overdue`, count: 1},
  {title: `Todey`, count: 0},
  {title: `Favorites`, count: 1},
  {title: `Repeating`, count: 1},
  {title: `Tags`, count: 1},
  {title: `Arhive`, count: 115}
];
