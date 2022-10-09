import { Button } from "antd";
import { useAppDispatch } from "../hook";
import { pluseFiveTiket } from "../../store/getTiketsReducer";

const AviasalesButtonPlus: React.FC = function () {
  const dispatch = useAppDispatch();
  return (
    <Button
      type="primary"
      block
      className="ant-btn-primary aviasales__more-tickets"
      onClick={() => dispatch(pluseFiveTiket())}
    >
      Показать еще 5 билетов!
    </Button>
  );
};

export default AviasalesButtonPlus;
