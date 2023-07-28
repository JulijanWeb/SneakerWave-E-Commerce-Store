import Directory from "./directory/directory-component";
import categoryList from "./category-list.json";

function App() {
  return <Directory categories={categoryList} />;
}

export default App;
