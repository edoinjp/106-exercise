function calculateSpaceAge(planet: string, seconds: number) {
  const EARTH_YEARS_IN_SECONDS = 31557600;

  const orbitalPeriods = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  } as const;


  type PlanetName = keyof typeof orbitalPeriods;
  const planetKey = planet.toLowerCase() as PlanetName;

  if (!orbitalPeriods[planetKey]) {
    throw new Error("Planet not found in Solar System.");
  }
  const ageInEarthYears = seconds / EARTH_YEARS_IN_SECONDS;

  const planetAge = ageInEarthYears / orbitalPeriods[planetKey];

  return parseFloat(planetAge.toFixed(2));
}

const yourAgeInSeconds = 1000000000;

console.log(`Earth Age: ${calculateSpaceAge("earth", yourAgeInSeconds)}`);
console.log(`Mercury Age: ${calculateSpaceAge("mercury", yourAgeInSeconds)}`);
console.log(`Jupiter Age: ${calculateSpaceAge("jupiter", yourAgeInSeconds)}`);
