import type { RootPrayerObject } from "../types/prayer.types";

const fetchPrayerTimes = async (
	lat: number,
	long: number,
	method: number
) => {
	const response = await fetch(
		`https://islamicapi.com/api/v1/prayer-time/?lat=${lat}&lon=${long}&method=${method}&api_key=${
			import.meta.env.VITE_API_KEY
		}`
	);

	const data: RootPrayerObject = await response.json();

	return {
		prayerTimes: data.data.times,
		date: data.data.date,
		prohibitedTimes: data.data.prohibited_times,
	};
};

export default fetchPrayerTimes;
