function compare(a, b) {
  var currentTime = a.children[1].children[1].children[0].textContent.split(
    " "
  );
  var currentObj = splitTime(currentTime);

  var nextTime = b.children[1].children[1].children[0].textContent.split(" ");
  var nextObj = splitTime(nextTime);

  return compareTime(currentObj, nextObj);
}

function splitTime(time) {
  time += "";
  time = time.split("");
  console.log(time);
  if (time.length == 8) {
    return (timeObj = {
      number: Number(time[1] + time[2]),
      unit: time[3],
    });
  } else {
    return (timeObj = {
      number: Number(time[1]),
      unit: time[2],
    });
  }
}

function compareTime(a, b) {
  if (a.unit == "m" && b.unit == "h") {
    return -1;
  }
  if (a.unit == "h" && b.unit == "m") {
    return 1;
  }

  if (a.number < b.number) {
    return -1;
  }
  if (a.number > b.number) {
    return 1;
  }
  return 0;
}

newListedArr.sort((a, b) => {
  return compare(a, b);
});
