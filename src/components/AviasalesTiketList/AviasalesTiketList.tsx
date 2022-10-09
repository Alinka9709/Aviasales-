import { Alert } from "antd";
import { useAppSelector } from "../hook";

import AviasalesTiket from "../AviasalesTiket/AviasalesTiket";
import "./AviasalesTiketList.scss";
import { AviasalesTiketProps } from "../interfaces/AviasalesTiketProps";
import { AviasalesSegmentsProps } from "../interfaces/AviasalesSegmentsProps";

const AviasalesTiketList: React.FC = function () {
  const tikets = useAppSelector((state) => state.tikets.tikets);
  const { all, sort, without, one, two, three, pluseFive } = useAppSelector(
    (state) => state.tikets,
  );

  const getCondition = () => {
    const arrCondition = [];
    if (one) arrCondition.push(1);
    if (two) arrCondition.push(2);
    if (three) arrCondition.push(3);
    if (without) arrCondition.push(0);

    return arrCondition;
  };

  function filterByTransplants(tiket: AviasalesTiketProps) {
    const arr = getCondition();

    if (arr.length === 0) {
      return true;
    }
    let count = 0;
    arr.forEach((selected) => {
      const transplants = tiket.segments.map(
        (segment: AviasalesSegmentsProps) => segment.stops.length,
      );
      transplants.forEach((amountTransplant) => {
        if (amountTransplant === selected) {
          count += 1;
        }
      });
    });

    if (count === 2) {
      return tiket;
    }
    return false;
  }
  const tiketsFiltering = () => {
    if (getCondition().length === 0 && !all) {
      return [];
    }
    return tikets
      .filter((tiket: AviasalesTiketProps) => filterByTransplants(tiket))

      .sort((a, b) => {
        if (sort === "cheap") {
          return a.price - b.price;
        }
        if (sort === "quick") {
          return (
            a.segments[0].duration -
            b.segments[0].duration +
            a.segments[1].duration -
            b.segments[1].duration
          );
        }
        if (sort === "optimal") {
          return (
            a.price -
            b.price +
            a.segments[0].duration -
            b.segments[0].duration +
            a.segments[1].duration -
            b.segments[1].duration
          );
        }
        return 0;
      })
      .slice(0, pluseFive);
  };

  const hasData = tiketsFiltering().length === 0;

  const emptyMessage = "Рейсов, подходящих под заданные фильтры, не найдено";
  return (
    <ul>
      {hasData && (
        <Alert
          className="ant-alert-error aviasales__message"
          message={emptyMessage}
        />
      )}

      {tiketsFiltering().map(({ carrier, price, segments }) => (
        <AviasalesTiket
          key={Math.random() * 400}
          carrier={carrier}
          price={price}
          segments={segments}
        />
      ))}
    </ul>
  );
};

export default AviasalesTiketList;
