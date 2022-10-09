import "./AviasalesTiket.scss";

import { AviasalesTiketProps } from "../interfaces/AviasalesTiketProps";

const AviasalesTiket: React.FC<AviasalesTiketProps> = function ({
  carrier,
  price,
  segments,
}) {
  const endOrigin = new Date(segments[0].date);
  endOrigin.setHours(
    endOrigin.getHours() + Math.floor(segments[0].duration / 60),
  );
  endOrigin.setMinutes(
    endOrigin.getMinutes() +
      Math.ceil(((segments[0].duration % 60) * 60) / 100),
  );

  const endDur = new Date(segments[1].date);
  endDur.setHours(endDur.getHours() + Math.floor(segments[1].duration / 60));
  endDur.setMinutes(
    endDur.getMinutes() + Math.ceil(((segments[1].duration % 60) * 60) / 100),
  );

  return (
    <li className="aviasales__card">
      <div className="aviasales__card-wrapper">
        <span className="aviasales__card-price">{price}P</span>
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          className="aviasales__card-company"
          alt="pic"
        />
        {/* <span className="aviasales__card-company">{carrier}</span> */}
      </div>
      <div className="aviasales__card-infos">
        <div className="aviasales__card-info">
          <p className="aviasales__card-path">
            {segments[0].origin} - {segments[0].destination}
          </p>
          <p className="aviasales__card-time">
            {new Date(segments[0].date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {endOrigin.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div className="aviasales__card-info">
          <p className="aviasales__card-path">В ПУТИ</p>
          <p className="aviasales__card-time">
            {Math.floor(segments[0].duration / 60)}ч{" "}
            {Math.ceil(((segments[0].duration % 60) * 60) / 100)}м
          </p>
        </div>
        <div className="aviasales__card-info">
          <p className="aviasales__card-path">
            {segments[0].stops.length === 0
              ? "ПРЯМОЙ РЕЙС"
              : `${segments[0].stops.length} ПЕРЕСАДКИ`}
          </p>
          <p className="aviasales__card-time">{segments[0].stops.join(", ")}</p>
        </div>
        <div className="aviasales__card-info">
          <p className="aviasales__card-path">
            {segments[1].origin} - {segments[1].destination}
          </p>
          <p className="aviasales__card-time">
            {new Date(segments[1].date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            -{" "}
            {endDur.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div className="aviasales__card-info">
          <p className="aviasales__card-path">В ПУТИ</p>
          <p className="aviasales__card--time">
            {Math.floor(segments[1].duration / 60)}ч{" "}
            {Math.ceil(((segments[1].duration % 60) * 60) / 100)}м
          </p>
        </div>
        <div className="aviasales__card-info">
          <p className="aviasales__card-path">
            {segments[1].stops.length === 0
              ? "ПРЯМОЙ РЕЙС"
              : `${segments[1].stops.length} ПЕРЕСАДКИ`}
          </p>
          <p className="aviasales__card-time">{segments[1].stops.join(", ")}</p>
        </div>
      </div>
    </li>
  );
};

export default AviasalesTiket;
