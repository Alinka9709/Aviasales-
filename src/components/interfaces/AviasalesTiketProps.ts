import { AviasalesSegmentsProps } from "./AviasalesSegmentsProps";

export interface AviasalesTiketProps {
  key: number;
  carrier: string;
  price: number;
  segments: AviasalesSegmentsProps[];
}
