import { MedalData, SortType } from "./types";

export const sortMedals = (data: MedalData[], sortBy: SortType): MedalData[] => {
  switch (sortBy) {
    case 'gold':
      return [...data].sort((a, b) => {
        if (b.gold !== a.gold) {
          return b.gold - a.gold;
        }
        return b.silver - a.silver;
      });

    case 'silver':
      return [...data].sort((a, b) => {
        if (b.silver !== a.silver) {
          return b.silver - a.silver;
        }
        return b.gold - a.gold;
      });

    case 'bronze':
      return [...data].sort((a, b) => {
        if (b.bronze !== a.bronze) {
          return b.bronze - a.bronze;
        }
        return b.gold - a.gold;
      });

    case 'total':
      return [...data].sort((a, b) => {
        if (b.total !== a.total) {
          return b.total - a.total;
        }
        return b.gold - a.gold;
      });

    default:
      return [...data]
  }
};

export const getFlagPosition = (countryCode: string): number => {
  // Flag position mapping based on alphabetical order of country codes
  const flagOrder = [
    'AUT', 'BLR', 'CAN', 'CHN', 'FRA', 'GER', 'ITA',
    'NED', 'NOR', 'RUS', 'SUI', 'SWE', 'USA'
  ];

  const index = flagOrder.indexOf(countryCode);

  // If country code is not found, return 0
  if (index === -1) return 0;

  // Using 17px as the height of each flag in the sprite
  return index * 17;
};