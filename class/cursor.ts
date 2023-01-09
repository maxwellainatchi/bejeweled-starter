import { Color, GridSpace, IScreen } from "./screen";

export default class Cursor<GamePiece extends string> {
  public row = 0;
  public col = 0;

  public gridColor: Color = "black";
  public cursorColor: Color = "cyan";
  public originalCurCol: Color = this.cursorColor;
  public textColor: Color = "magenta";
  public selected: Boolean = false;
  public center: [number, number] = [0, 0];

  constructor(
    public numRows: number,
    public numCols: number,
    public screen: IScreen<GamePiece>
  ) {}

  //Use setBackgroundColor and resetBackgroundColor in cursor.js
  //to highlight the cursor's current position on the grid
  resetBackgroundColor() {
    this.screen.setBackgroundColor(this.row, this.col, this.gridColor);
    this.screen.render();
  }

  setBackgroundColor() {
    this.screen.setBackgroundColor(this.row, this.col, this.cursorColor);
    this.screen.render();
  }

  setTextColor() {
    this.screen.setTextColor(this.row, this.col, this.textColor);
    this.screen.render();
  }

  up() {
    this.resetBackgroundColor();

    if (this.selected) {
      if (
        this.row >= this.center[1] &&
        this.col === this.center[0] &&
        this.row > 0
      ) {
        this.row--;
      }
      //this.screen.setBackgroundColor(grid[this.center[0]], this;
    } else {
      if (this.row > 0) {
        this.row--;
      }
    }
    this.setBackgroundColor();
  }

  down() {
    this.resetBackgroundColor();
    if (this.selected) {
      if (
        this.row <= this.center[1] &&
        this.col === this.center[0] &&
        this.row < 7
      ) {
        this.row++;
      }
    } else {
      if (this.row < 7) {
        this.row++;
      }
    }
    this.setBackgroundColor();
  }

  left() {
    this.resetBackgroundColor();
    if (this.selected) {
      if (
        this.col >= this.center[0] &&
        this.row === this.center[1] &&
        this.col > 0
      ) {
        this.col--;
      }
    } else {
      if (this.col > 0) {
        this.col--;
      }
    }

    this.setBackgroundColor();
  }

  right() {
    this.resetBackgroundColor();
    if (this.selected) {
      if (
        this.col <= this.center[0] &&
        this.row === this.center[1] &&
        this.col < 7
      ) {
        this.col++;
      }
    } else {
      if (this.col < 7) {
        this.col++;
      }
    }

    this.setBackgroundColor();
  }

  return(playerTurn: GridSpace<GamePiece>) {
    this.resetBackgroundColor();
    this.setTextColor();
    this.screen.setGrid(this.row, this.col, playerTurn);
  }
}
