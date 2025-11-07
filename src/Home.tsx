import { useEffect, useState } from "react";
import PrayerTimeCard from "./components/PrayerTimeCard";
import NavbarComponent from "./components/Navbar";
import { useIP } from "./hooks/useIP";
import fetchPrayerTimes from "./lib/prayerTimes.fn";
import { useMethod } from "./hooks/useMethod";
import type { PrayerDataState } from "./types/prayer.types";

const Home = () => {
	const [prayerData, setPrayerData] =
		useState<PrayerDataState | null>(null);
	const { location } = useIP();
	const { selectedMethod } = useMethod();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (
			!location?.location.latitude ||
			!location.location.longitude
		) {
			setLoading(true);
			return;
		}

		const prayerTimes = async () => {
			const data = await fetchPrayerTimes(
				location.location.latitude,
				location.location.longitude,
				selectedMethod
			);
			setPrayerData(data);
			setLoading(false);
		};
		prayerTimes();
	}, [
		location?.location.latitude,
		location?.location.longitude,
		selectedMethod,
	]);
	return (
		<>
			<NavbarComponent />
			<main className="flex flex-col justify-center items-center text-center pt-15 px-4">
				<PrayerTimeCard
					data={prayerData}
					loading={loading}
				/>
			</main>
		</>
	);
};

export default Home;
