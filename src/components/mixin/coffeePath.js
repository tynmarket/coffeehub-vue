const PATH_COFEES = "/coffees";

function coffees(roast) {
  if (roast != null) {
    return `${PATH_COFEES}/roast/${roast}`;
  } else {
    return "/";
  }
}

export default {
  data() {
    return {
      path: {
        cinnamonRoast: coffees("cinnamon"),
        cityRoast: coffees("city"),
        frenchRoast: coffees("french"),
        fullcityRoast: coffees("fullcity"),
        highRoast: coffees("high"),
        mediumRoast: coffees("medium"),
        roast: coffees(":roast"),
        roastCoffees: coffees
      }
    };
  }
};
