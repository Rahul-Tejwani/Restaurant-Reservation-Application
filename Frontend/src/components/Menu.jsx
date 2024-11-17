import React from "react";
import { data } from "../restApi.json";

const Menu = () => {
  return (
    <section className="menu" id="id">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Discover the most-loved creations from our menu! Our handpicked
            selection of signature dishes is a celebration of flavor, freshness,
            and finesse. Whether you’re craving hearty dinner classics,
            wholesome breakfasts, or indulgent desserts, our popular dishes are
            sure to tantalize your taste buds.
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
