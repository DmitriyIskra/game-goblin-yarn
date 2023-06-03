export default class Cursor {
  constructor(cursor) {
    this.cursor = cursor;
  }

  changeCursor(top, left) {  // позиционируем блок с курсором
    this.cursor.style.top = `${top}px`;
    this.cursor.style.left = `${left}px`;

    this.cursor.style.display = 'block';
  }

  cursorHidden() {
    this.cursor.style.display = 'none';
  }
}
