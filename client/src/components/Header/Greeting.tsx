import { DateTime } from "luxon";

function Greeting() {
  function getGreeting() {
    const currTime = DateTime.now().hour;

    if (currTime >= 5 && currTime < 12) return "Good Morning";
    if (currTime >= 12 && currTime < 18) return "Good Afternoon";
    return "Good Evening";
  }

  return <h1>{getGreeting()}</h1>;
}

export default Greeting;