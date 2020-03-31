import $ from "jquery";
import DataProvider from './data/DataProvider.js';
import Table from './ui/Table.js';


const dataProvider = new DataProvider(),
      urlShort = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}';
      
dataProvider.get(urlShort).done((data) => {
  $(document.body).append(new Table(data).$view)
}).fail((err) => {
  console.error(err);
});
  

