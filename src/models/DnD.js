export const DnD = function () {
    const dnd1 = document.getElementById("t1");

    // Отключаем дефолтный DnD
dnd1.ondragstart = () => false;

// Функция для получение координат элемента
const getCoords = (elem) => {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

/* Основной механизм DnD */

// Этап 1. Вешаем обработчик на mousedown
dnd1.addEventListener('mousedown', (e) => {
  // Этап 2. Вычисляем начальные координаты положения элемента
  const coords = getCoords(dnd1);
  // console.log('coords', coords);
  const shiftX = e.pageX - coords.left;
  // console.log('shiftX', shiftX);
  const shiftY = e.pageY - coords.top;
  // console.log('shiftY', shiftY);
  
  // Этап 3. Подготовка к переносу
  // Создаем функцию для изменения стилей и перемещения элемента
  const moveAt = (e) => {
    dnd1.style.left = e.pageX - shiftX + 'px';
    dnd1.style.top = e.pageY - shiftY + 'px';
  }
  // Создаем функцию для удаления всех обработчиков
  const theEnd = () => {
    document.removeEventListener('mousemove', moveAt);
    document.removeEventListener('mouseup', theEnd);
  }

  // Чтобы перенос работал, делаем элемент absolute
  dnd1.style.position = 'absolute';
  // Ставим первые значения переноса на точке нахождения элемента
  moveAt(e);
  dnd1.style.zIndex = 1000; // делаем над другими элементами
  
  // Этап 4. Двигаем элемент.
  // При изменении положения мыши меняем координаты квадрата
  document.addEventListener('mousemove', moveAt);
  // Когда отпускаем мышь - все удаляем
  document.addEventListener('mouseup', theEnd);
})
}