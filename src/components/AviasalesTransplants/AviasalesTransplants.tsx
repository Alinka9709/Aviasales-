import { useAppDispatch, useAppSelector } from "../hook";

import { selectId } from "../../store/getTiketsReducer";
import "./AviasalesTransplants.scss";

function AviasalesTransplants() {
  const checkbox = useAppSelector((state) => state.tikets);
  const dispatch = useAppDispatch();
  return (
    <div className="transplants">
      <p className="transplants__text">Количество пересадок</p>
      <label htmlFor="label" className="transplants__label">
        <input
          className="transplants__check"
          type="checkbox"
          checked={checkbox.all}
          name=""
          id=""
          onChange={() => dispatch(selectId("all"))}
        />
        <span className="transplants__span">все</span>
      </label>
      <label htmlFor="label" className="transplants__label">
        <input
          type="checkbox"
          className="transplants__check"
          checked={checkbox.without}
          name=""
          id=""
          onChange={() => dispatch(selectId("without"))}
        />
        <span className="transplants__span">Без пересадок</span>
      </label>
      <label htmlFor="label" className="transplants__label">
        <input
          type="checkbox"
          className="transplants__check"
          checked={checkbox.one}
          name=""
          id=""
          onChange={() => dispatch(selectId("one"))}
        />
        <span className="transplants__span">1 пересадки</span>
      </label>
      <label htmlFor="label" className="transplants__label">
        <input
          type="checkbox"
          className="transplants__check"
          checked={checkbox.two}
          name=""
          id=""
          onChange={() => dispatch(selectId("two"))}
        />
        <span className="transplants__span">2 пересадки</span>
      </label>
      <label htmlFor="label" className="transplants__label">
        <input
          type="checkbox"
          className="transplants__check"
          checked={checkbox.three}
          name=""
          id=""
          onChange={() => dispatch(selectId("three"))}
        />
        <span className="transplants__span"> 3 пересадки</span>
      </label>
    </div>
  );
}

export default AviasalesTransplants;
