import React from "react";
import { Button } from "antd";
import "./AviasalesButton.scss";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { useAppDispatch } from "../hook";
import { сhangeFilter } from "../../store/getTiketsReducer";

const { useState } = React;

function AviasalesButton() {
  const [size] = useState<SizeType>("large");

  const dispatch = useAppDispatch();
  const buttons = [
    { label: "cheap", text: "Самый дешевый" },
    { label: "quick", text: "Самый быстрый" },
    { label: "optimal", text: "Оптимальный" },
  ];
  return (
    <>
      {buttons.map((button) => (
        <Button
          type="primary"
          size={size}
          className="aviasales__button ant-btn-primary"
          onClick={() => dispatch(сhangeFilter(button.label))}
        >
          {button.text}
        </Button>
      ))}
    </>
  );
}

export default AviasalesButton;
