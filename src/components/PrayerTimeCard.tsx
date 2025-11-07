import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import type { PrayerDataState } from "../types/prayer.types";

const PrayerTimeCard = ({
	data,
	loading,
}: {
	data: PrayerDataState | null;
	loading: boolean;
}) => {
	if (loading) {
		return <p>loading...</p>;
	}

	const prayerTimes = [
		{ key: "Fajr", label: data?.prayerTimes.Fajr },
		{ key: "Dhuhr", label: data?.prayerTimes.Dhuhr },
		{ key: "Asr", label: data?.prayerTimes.Asr },
		{ key: "Maghrib", label: data?.prayerTimes.Maghrib },
		{ key: "Ishaa", label: data?.prayerTimes.Isha },
	];

	const otherTimes = [
		{ key: "Sunrise", label: data?.prayerTimes.Sunrise },
		{ key: "Midnight", label: data?.prayerTimes.Midnight },
		{ key: "First Third", label: data?.prayerTimes.Firstthird },
		{ key: "Last Third", label: data?.prayerTimes.Lastthird },
	];
	return (
		<Card className="max-w-xl p-3">
			<CardHeader className="grid grid-cols-3 items-center text-center gap-3">
				<div className="flex flex-col ">
					<p className="text-md">{data?.date.gregorian.month.en}</p>
					<p className="text-md">{data?.date.gregorian.date}</p>
				</div>
				<h1 className="text-3xl">{data?.date.hijri.weekday.en}</h1>
				<div className="flex flex-col ">
					<p className="text-md">{data?.date.hijri.month.en}</p>
					<p className="text-md">{data?.date.hijri.date}</p>
				</div>
			</CardHeader>
			<Divider />
			<CardBody className="flex flex-col items-center text-center justify-center">
				<div className="p-3">
					<h1 className="text-lg pb-3">Prayer Times</h1>
					<div className="flex flex-wrap md:flex-nowrap justify-center gap-3 text-center">
						{prayerTimes.map((val, i) => (
							<div
								className="flex flex-col items-center text-center p-3 border border-default-500 rounded-md w-[45%] md:w-1/5"
								key={i}>
								<p>{val.key}</p>
								<p>{val.label}</p>
							</div>
						))}
					</div>
				</div>
				<Divider />
				<div className="p-3">
					<div className="grid  grid-cols-2 md:grid-cols-4 items-center text-center gap-3">
						{otherTimes.map((val, i) => (
							<div
								className="flex flex-col items-center text-center p-3 border border-default-500 rounded-md"
								key={i}>
								<p>{val.key}</p>
								<p>{val.label}</p>
							</div>
						))}
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default PrayerTimeCard;
