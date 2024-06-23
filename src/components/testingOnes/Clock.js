import Daytime from "./Daytime";
import Nighttime from "./Nighttime";

function Clock() {
   const time = new Date().getHours();
   return { time } >= 6 && { time } <= 18 ? <Daytime /> : <Nighttime />;
}

export default Clock;
