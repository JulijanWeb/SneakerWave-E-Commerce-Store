import Directory from "..//../directory/directory-component";
import categoryList from "../../category-list.json";

function Home() {
  return <Directory categories={categoryList} />;
}

export default Home;
