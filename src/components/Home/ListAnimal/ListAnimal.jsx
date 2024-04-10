import "./ListAnimal.scss";
function ListAnimal() {
  return (
    <div className="list flex">
      <div className="section-2 transition ease-in-out delay-150 bg-blue-500  hover:-translate-y-2  hover:bg-indigo-500 duration-300">
        <div className="img-section2">
          <img src="../src/assets/fish.jpg" alt="" />
        </div>
        <div className="content-section2 ">
          <h2 className="text-*">From Furry Friends to Family Members</h2>
        </div>
      </div>
      <div className="section-2 transition ease-in-out delay-150 bg-blue-500  hover:-translate-y-2   hover:bg-indigo-500 duration-300">
        <div className="img-section2">
          <img src="../src/assets/rabbit.jpg" alt="" />
        </div>
        <div className="content-section2 ">
          <h2 className="text-*">From Furry Friends to Family Members</h2>
        </div>
      </div>
      <div className="section-2 transition ease-in-out delay-150 bg-blue-500  hover:-translate-y-2    hover:bg-indigo-500 duration-300">
        <div className="img-section2">
          <img src="../src/assets/bird.jpg" alt="" />
        </div>
        <div className="content-section2">
          <h2 className="text-*">From Furry Friends to Family Members</h2>
        </div>
      </div>
    </div>
  );
}
export default ListAnimal;
