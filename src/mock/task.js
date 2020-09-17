import {COLORS, DESCRIPTIONS} from "../const";
import {getRandomInt} from "../utils";

const generateDescription = () => DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)];

const generateDate = () => {
  const isDate = Boolean(getRandomInt());

  if (!isDate) {
    return null;
  }

  const maxDaysGap = 7;
  const daysGap = getRandomInt(-maxDaysGap, maxDaysGap);
  const currentDate = new Date();

  currentDate.setHours(23, 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + daysGap);

  return new Date(currentDate);
};

const generateRepeating = () => {
  return {
    mo: false,
    tu: false,
    we: Boolean(getRandomInt()),
    th: false,
    fr: Boolean(getRandomInt()),
    sa: false,
    su: false
  };
};

const generateColor = () => COLORS[getRandomInt(0, COLORS.length - 1)];

export const generateTask = () => {
  const dueDate = generateDate();
  const repeating = dueDate === null
    ? generateRepeating()
    : {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false
    };

  return {
    description: generateDescription(),
    dueDate,
    repeating,
    color: generateColor(),
    isFavorite: Boolean(getRandomInt()),
    isArchive: Boolean(getRandomInt())
  };
};
