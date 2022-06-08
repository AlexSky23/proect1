export const DnD = function () {
    const dnd1 = document.getElementById("t1");

    let currentDroppable = null;

    dnd1.onmousedown = function(event) {

      let shiftX = event.clientX - dnd1.getBoundingClientRect().left;
      let shiftY = event.clientY - dnd1.getBoundingClientRect().top;

      dnd1.style.position = 'absolute';
      dnd1.style.zIndex = 1000;
      document.body.append(dnd1);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        dnd1.style.left = pageX - shiftX + 'px';
        dnd1.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        dnd1.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        dnd1.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null если мы были не над droppable до этого события
            // (например, над пустым пространством)
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
            // (например, только что покинули droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      dnd1.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        dnd1.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    dnd1.ondragstart = function() {
      return false;
    };
}