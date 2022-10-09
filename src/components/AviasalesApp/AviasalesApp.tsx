import { useEffect } from "react";
import { Spin, Alert } from "antd";

import { LoadingOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../hook";
import { fetchTiketById, fetchTikets } from "../../store/ApiReducer";

import AviasalesButton from "../AviasalesButton/AviasalesButton";
import AviasalesTiketList from "../AviasalesTiketList/AviasalesTiketList";
import AviasalesTransplants from "../AviasalesTransplants/AviasalesTransplants";
import img from "../../img/Logo.png";
import "./Aviasales.scss";

const App: React.FC = function () {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.tikets);
  // const tikets = useAppSelector((state) => state.tikets.tikets);

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  useEffect(() => {
    dispatch(fetchTiketById());
    dispatch(fetchTikets());
  }, [dispatch]);
  return (
    <section className="aviasales">
      <div className="aviasales__img">
        <img src={img} alt="самолет" />
      </div>
      <section className="aviasales__wrapper">
        <AviasalesTransplants />
        <AviasalesButton />

        {status === true && <Spin indicator={antIcon} />}
        {error && (
          <Alert
            className="ant-alert-error aviasales__error"
            message="Что-то пошло не так,но мы уже работаем над этим"
            type="error"
          />
        )}
        <AviasalesTiketList />
      </section>
    </section>
  );
};

export default App;
