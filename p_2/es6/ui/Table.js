import $ from "jquery";

class Table {
  
  constructor(data) {
    this.cols = Object.keys(data[0]);
    this.$view = data.reduce(($table, row) => {
      return $table.append(this._getTr(row));
    }, $(`<table class="table"/>`).prepend(this._getHead(this.cols)));
  }
  
  _getHead() {
    return this.cols.reduce((tr, col) => {
      return tr + this._getTh(col);
    }, '<tr>') + '</tr>';
  }
  
  _getTr(row) {
    return this.cols.reduce((tr, key) => {
      return tr + this._getTd(row[key] ? row[key] : '');
    }, '<tr>') + '</tr>';
  }
  
  _getTd(content) {
    return `<td>${content}</td>`;
  }
  
  _getTh(content) {
    return `<th>${content}</th>`;
  }
  
  
}

export default Table;