//your JS code here. If required.
function mergeCraftDates(emilyDates, oliverDates) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < emilyDates.length && j < oliverDates.length) {
    if (emilyDates[i] < oliverDates[j]) {
      merged.push(emilyDates[i]);
      i++;
    } else {
      merged.push(oliverDates[j]);
      j++;
    }
  }

  while (i < emilyDates.length) {
    merged.push(emilyDates[i]);
    i++;
  }

  while (j < oliverDates.length) {
    merged.push(oliverDates[j]);
    j++;
  }

  return merged;
}
