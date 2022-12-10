// Ваша задача состоит в том, чтобы сделать две функции
// (maxи min, или maximumи и minimumт.д., в зависимости от языка),
// которые получают на вход список целых чисел и возвращают наибольшее и
// наименьшее число в этом списке соответственно.

var min = function (list) {
  return Math.min.apply(null, list);
};

var max = function (list) {
  return Math.max.apply(null, list);
};
