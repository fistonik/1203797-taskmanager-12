export const getRandomInt = (min = 0, max = 1) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const isTaskRepeating = (repeating) => {
  // console.log(repeating)
  return Object.values(repeating).some(Boolean);
}

export const humanizeTaskDueDate = (dueDate) => dueDate.toLocaleString(`en-US`, {day: `numeric`, month: `long`});

export const isTaskExpired = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() > dueDate.getTime();
};

export const isTaskExpiringToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() === dueDate.getTime();
};

export const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);

  return new Date(currentDate);
};
