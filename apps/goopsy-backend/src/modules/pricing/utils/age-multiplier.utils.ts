export function getAgeMultiplier(
  ageMonths: number,
  multipliers: {
    below3M: number;
    m3to6: number;
    m6to11: number;
    above11: number;
  },
): number {
  if (ageMonths <= 3) {
    return multipliers.below3M;
  }

  if (
    ageMonths > 3 &&
    ageMonths <= 6
  ) {
    return multipliers.m3to6;
  }

  if (
    ageMonths > 6 &&
    ageMonths <= 11
  ) {
    return multipliers.m6to11;
  }

  return multipliers.above11;
}