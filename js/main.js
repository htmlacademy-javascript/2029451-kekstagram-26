const randomInt = (min, max) => {
  if (min>=max) {
    // eslint-disable-next-line no-alert
    return alert('Диапазон чисел указан не верно!');
  }
  if (min < 0 || max < 0) {
    // eslint-disable-next-line no-alert
    return alert('Диапазон чисел должен быть положительным!');
  }
  const rand = min + Math.random() * (max - min);
  return Math.round(rand);
};
randomInt(1, 10);

const checkCommentLength = (text, length) => {
  const textLength = text.length;
  return !(textLength > length);
};

checkCommentLength('А что так можно было?', 140);
