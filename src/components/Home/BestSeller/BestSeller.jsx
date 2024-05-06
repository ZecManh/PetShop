import { Tabs } from "antd";
import "./BestSeller.scss";
import axios from "axios";
import { useState, useEffect } from "react";
function BestSeller() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(
          "https://66339c0af7d50bbd9b4a0a42.mockapi.io/pet"
        );
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPets();
  }, []);
  const Dog = () => {
    return (
      <>
        <div className="container mx-auto dog-tab">
          <div className="columns-3 ps-40 pe-40 pb-5">
            {pets.map((items) => (
              <div className="" key={items.id}>
                <img className="img-list w-full" src={items.avatar} alt="" />
                <h2>{items.name}</h2>
                <p>{items.introduce}</p>
                <a href="">{items.nameProduct}</a>
                <div>
                  <span>{items.price}</span>
                </div>
              </div>
            ))}
          </div>

          <nav aria-label="Page navigation example flex  ">
            <ul class="list-style-none flex justify-center">
              <li>
                <a
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                  href="#"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                  href="#"
                >
                  1
                </a>
              </li>
              <li aria-current="page">
                <a
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                  href="#"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                  href="#"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                  href="#"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  };
  const items = [
    {
      key: "1",
      label: "Dogs",
      children: <Dog />,
    },
    {
      key: "2",
      label: "Cats",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Fishs",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <div className="best-seller">
      <div className="">
        <h2 className="best-seller-h2 text-center">BestSellers</h2>
        <Tabs defaultActiveKey="1" centered items={items} />
      </div>
    </div>
  );
}
export default BestSeller;
