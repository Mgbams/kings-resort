import React from "react";
import { useContext } from "react";
import { RoomContext } from "./../context";
import { Title } from "./../components/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  // console.log(context)
  const {
    handleChange,
    price,
    capacity,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
    type,
    breakfast
  } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Rechercher des chambres" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Type de chambre</label>
          <select name="type" id="type" value={type} onChange={handleChange}>
            {" "}
            {types}{" "}
          </select>
        </div>
        {/*end of select type */}
        {/* select type */}
        <div className="form-group">
          <label htmlFor="capacity">Invités</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            onChange={handleChange}
            className="form-control"
          >
            {" "}
            {people}{" "}
          </select>
        </div>
        {/*end of select type */}

        <div className="form-group">
          <label htmlFor="price">Prix ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
    </section>
  );
};
