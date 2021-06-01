//возвращает целое число из диапазона
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(0, 100);
//console.log(getRandomInt(0, 100 );

// число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"

function getRandomNum(min, max) {
  return Math.random() * (max - min + 1) + min;
}
getRandomNum((0, 100 ).toFixed(3));
//console.log(getRandomNum(0, 100 ).toFixed(3));
