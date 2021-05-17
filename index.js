function scuberGreetingForFeet(feet) {
  // Write your code here!
  const FREE_MAX = 400;
  const NO_SURCHARGE_MAX = 2000;
  const DISTANCE_MAX = 2500;
  if (feet <= FREE_MAX) {
    return "This one is on me!";
  } else if (feet > NO_SURCHARGE_MAX && feet <= DISTANCE_MAX) {
    return "I will gladly take your thirty bucks.";
  } else if (feet > DISTANCE_MAX) {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let resultMessage;
  switch (tip) {
    case "generous":
      resultMessage = "Thank you so much.";
      break;

    case "not as generous":
      resultMessage = "Thank you.";
      break;

    default:
      resultMessage = "Bye.";
      break;
  }
  return resultMessage;
}
