import { atom } from "recoil";
import { timeOptions } from "../data/data";

type selectedDateTimeType = {
  date: Date | null,
  time: string | null
}
export const selectedDateTimeState = atom({
  key: "selectedDTState",
  default: { date: new Date(), time: timeOptions[0] } as selectedDateTimeType
});