
export const calculateRuntime = (selectedZoneType, userET, daysPerWeek) => {
    if (selectedZoneType === "spray") {
      return (((userET / 4 / 1.5) * 60) / daysPerWeek).toFixed(0);
    } else if (selectedZoneType === "rotor") {
      return parseInt((((userET / 4 / 0.625) * 60) / daysPerWeek).toFixed(0));
    } else if (selectedZoneType === "drip") {
      return parseInt((((userET / 4 / 2) * 60) / daysPerWeek).toFixed(0));
    }
    return null;
  };
  