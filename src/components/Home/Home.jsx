import Header from "../Header/Header";
import Banner from "./Banner/Banner";
import BestSeller from "./BestSeller/BestSeller";
import ListAnimal from "./ListAnimal/ListAnimal";
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <ListAnimal />
      <BestSeller />
    </div>
  );
}
export default Home;
