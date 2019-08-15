import {randomInteger} from "../main.js";

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
  isFavorite: true,
  isArhive: true
});
