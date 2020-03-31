class DataProvider {
  constructor(url) {
    this.url = url;
  }
  
  get() {
    console.group("%c Custom log:", "background: lightgreen; color: orange; font-size: 16px;");
    console.log("Here is the code to get response");
    console.groupEnd();
  }
}

export default DataProvider;