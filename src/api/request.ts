import { MedalData } from "@/utils/types";

export const fetchMedals = async () => {
  try {
    // Uncomment the following lines to simulate a network error

    // await new Promise(resolve => setTimeout(resolve, 1000));
    // throw new Error('Simulated API failure - network error');

    let data;
    const path = "/medals.json";
    if (typeof window === 'undefined') {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      data = await response.json();
    }

    return data?.map((country: MedalData) => ({
      ...country,
      total: country.gold + country.silver + country.bronze,
    }));
  } catch (error) {
    console.error('Error loading data:', error);
    throw new Error('Failed to load medal data. Please check your connection and try again.');
  }
}