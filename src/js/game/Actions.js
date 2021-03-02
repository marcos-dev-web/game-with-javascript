
export default class Actions {
  constructor(matriz) {
    this.matriz = matriz;
  }

  mark(fieldSquare, fieldText, pos, color = null) {
    const colorMarked = color ? color : "#ffaf40";
    fieldSquare.style.background = colorMarked;
    fieldText.textContent = this.matriz[pos[0]][pos[1]];
  }

  tryMatch(fields) {
    const field1 = fields.click1;
    const field2 = fields.click2;

    const pos1 = fields.indexValue1;
    const pos2 = fields.indexValue2;

    const value1 = this.matriz[pos1[0]][pos1[1]];
    const value2 = this.matriz[pos2[0]][pos2[1]];

    const element1 = fields.elementValue1;
    const element2 = fields.elementValue2;

    if (value1 == value2) {
      this.mark(field1, element1, pos1, 'springgreen');
      this.mark(field2, element2, pos2, 'springgreen');
      setTimeout(() => {
        field1.innerHTML = '';
        field2.innerHTML = '';
        field1.classList.remove('game_cube');
        field2.classList.remove('game_cube');
        field1.style = "pointer-events: none";
        field2.style = "pointer-events: none";
      }, 1000);
      return true;
    } else {
      this.mark(field1, element1, pos1, '#ff4d4d');
      this.mark(field2, element2, pos2, '#ff4d4d');
      setTimeout(() => {
        this.reset(field1, element1, field2, element2);
      }, 1000);
      return false;
    }
  }

  reset(
    field1,
    element1,
    field2,
    element2
  ) {
    if (field1) {
      field1.removeAttribute('style');
      element1.textContent = 'x';
    }
    if (field2) {
      field2.removeAttribute('style');
      element2.textContent = 'x';
    }
  }
}
