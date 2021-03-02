
import Actions from './Actions.js';

const fields = {
  click1: null,
  indexValue1: null,
  elementValue1: null,

  click2: null,
  indexValue2: null,
  elementValue2: null,
};

export function event(event, matriz, callback) {
  const action = new Actions(matriz);

  function reset() {
    fields.click1 = null;
    fields.indexValue1 = null;
    fields.elementValue1 = null;
    fields.click2 = null;
    fields.indexValue2 = null;
    fields.elementValue2 = null;
  }

  if (!fields.click1) {
    
    fields.click1 = event.target;
    fields.elementValue1 = event.target.querySelector(".value_cube");
    fields.indexValue1 = [
      parseInt(fields.click1.getAttribute("data-x")),
      parseInt(fields.click1.getAttribute("data-y")),
    ];

    action.mark(fields.click1, fields.elementValue1, fields.indexValue1);

  } else if (fields.click1 && !fields.click2) {
    if (fields.click1 != event.target) {
      fields.click2 = event.target;
      fields.elementValue2 = event.target.querySelector(".value_cube");
      fields.indexValue2 = [
        parseInt(fields.click2.getAttribute("data-x")),
        parseInt(fields.click2.getAttribute("data-y")),
      ];
  
      if (action.tryMatch(fields)) {
        callback();
      }
      reset();
    }
  }
}
