import { useAppDispatch, useAppSelector } from "../hook";

import { selectId, selectAll } from "../../store/getTiketsReducer";

import "./AviasalesTransplants.scss";

function AviasalesTransplants() {
  const checkbox = useAppSelector((state) => state.tikets);
  const dispatch = useAppDispatch();
  const steps = [
    { label: "without", text: "Без пересадок" },
    { label: "one", text: "1 пересадка" },
    { label: "two", text: "2 пересадки" },

    { label: "three", text: "3 пересадки" },
  ];
  return (
    <div className="transplants">
      <p className="transplants__text">Количество пересадок</p>
      <label htmlFor="label" className="transplants__label">
        <input
          className="transplants__check"
          type="checkbox"
          checked={checkbox.allchek}
          name=""
          id=""
          onChange={() => dispatch(selectAll())}
        />
        <span className="transplants__span">все</span>
      </label>
      {steps.map((el) => (
        <label
          htmlFor="label"
          className="transplants__label"
          key={Math.random() * 100}
        >
          <input
            type="checkbox"
            className="transplants__check"
            checked={checkbox.steps[el.label]}
            name=""
            id=""
            onChange={() => dispatch(selectId(el.label))}
          />
          <span className="transplants__span">{el.text}</span>
        </label>
      ))}
    </div>
  );
}

export default AviasalesTransplants;
