import React from "react";
import { Button } from "antd";
import "./AviasalesButton.scss";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { useAppDispatch } from "../hook";
import { сhangeFilter } from "../../store/getTiketsReducer";

const { useState } = React;

const AviasalesButton: React.FC = function () {
  const [size] = useState<SizeType>("large");

  const dispatch = useAppDispatch();

  return (
    <>
      <Button
        type="primary"
        size={size}
        className="aviasales__button ant-btn-primary"
        onClick={() => dispatch(сhangeFilter("cheap"))}
      >
        Самый дешевый
      </Button>
      <Button
        size={size}
        className="aviasales__button"
        onClick={() => dispatch(сhangeFilter("quick"))}
      >
        Самый быстрый
      </Button>
      <Button
        type="dashed"
        size={size}
        className="aviasales__button ant-btn-dashed"
        onClick={() => dispatch(сhangeFilter("optimal"))}
      >
        Оптимальный
      </Button>
    </>
  );
};

export default AviasalesButton;
