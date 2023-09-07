let monthET = monthETState; //inches
  let cropET = (monthET * 0.65).toFixed(2);
  let weekET = (cropET / 4.2).toFixed(2);
  let cyclesPerWeek = 4;
  let rotor = (((weekET / 0.625) * 60) / cyclesPerWeek).toFixed(0);
  let spray = (((weekET / 1.5) * 60) / cyclesPerWeek).toFixed(0);
  // let drop

  useEffect(getSeasonal, []);
  function getSeasonal() {
    let big = user.cet.July;
    let small = thisMonthsET[0][1];
    let seasonalMathLong = (small / big) * 100;
    setSeasonal(roundNearest5(seasonalMathLong));
    function roundNearest5(num) {
      return Math.round(num / 5) * 5;
    }
  }

  function setET() {
    setMonthETState(thisMonthsET[0][1]);
  }
  useEffect(setET, []);

  const monthsAsStrings = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let month = monthsAsStrings[d.getMonth()];

  const ETsAsArray = Object.entries(user.cet);
  const filter = ETsAsArray.filter(([key, value]) => typeof value === "string");
  // console.log(ETsAsArray);

  let thisMonthsET = ETsAsArray.filter((item) => {
    let currentMonth = monthsAsStrings[d.getMonth()];
    return item[0].toLowerCase().includes(currentMonth.toLowerCase());
  });