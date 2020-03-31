import $ from "jquery";

class DataProvider {
  get(url) {
    return $.get(url);
  }
}

export default DataProvider;