//возвращает целое число из диапазона
function getRandomInt(min, max) {
  return (Math.floor(Math.random() *(max - min +1) + min));
}
getRandomInt(300, 0);


// число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"


function getRandomNum(min, max, comma) {
  return (Number((Math.random() * (max - min) + min).toFixed(comma)));
}
getRandomNum(100, 100, 4);
