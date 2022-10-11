import "./AviasalesTiket.scss";

import { AviasalesTiketProps } from "../interfaces/AviasalesTiketProps";

function AviasalesTiket({ carrier, price, segments }: AviasalesTiketProps) {
  const endOrigin = new Date(segments[0].date);
  endOrigin.setHours(
    endOrigin.getHours() + Math.floor(segments[0].duration / 60),
  );
  endOrigin.setMinutes(
    endOrigin.getMinutes() +
      Math.ceil(((segments[0].duration % 60) * 60) / 100),
  );

  return (
    <li className="aviasales__card">
      <div className="aviasales__card-wrapper">
        <span className="aviasales__card-price">
          {price.toLocaleString()} P
        </span>
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          className="aviasales__card-company"
          alt="pic"
        />
      </div>
      {segments.map((segment) => (
        <div className="aviasales__card-infos" key={Math.random() * 100}>
          <div className="aviasales__card-info">
            <p className="aviasales__card-path">
              {segment.origin} - {segment.destination}
            </p>
            <p className="aviasales__card-time">
              {new Date(segment.date).toLocaleTimeString([], {
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
              {Math.floor(segment.duration / 60)}ч{" "}
              {Math.ceil(((segment.duration % 60) * 60) / 100)}м
            </p>
          </div>
          <div className="aviasales__card-info">
            <p className="aviasales__card-path">
              {segment.stops.length === 0
                ? "ПРЯМОЙ РЕЙС"
                : `${segment.stops.length} ПЕРЕСАДКИ`}
            </p>
            <p className="aviasales__card-time">{segment.stops.join(", ")}</p>
          </div>
        </div>
      ))}
    </li>
  );
}

export default AviasalesTiket;
