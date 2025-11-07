export interface RootPrayerObject {
	code: number;
	status: string;
	data: Data;
}

export interface PrayerDataState {
	prayerTimes: Times;
	date: Date;
	prohibitedTimes: Prohibitedtimes;
}

interface Data {
	times: Times;
	date: Date;
	qibla: Qibla;
	prohibited_times: Prohibitedtimes;
	timezone: Timezone;
}

interface Timezone {
	name: string;
	utc_offset: string;
	abbreviation: string;
}

interface Prohibitedtimes {
	sunrise: Sunrise;
	noon: Sunrise;
	sunset: Sunrise;
}

interface Sunrise {
	start: string;
	end: string;
}

interface Qibla {
	direction: Direction;
	distance: Distance;
}

interface Distance {
	value: number;
	unit: string;
}

interface Direction {
	degrees: number;
	from: string;
	clockwise: boolean;
}

interface Date {
	readable: string;
	timestamp: string;
	hijri: Hijri;
	gregorian: Gregorian;
}

interface Gregorian {
	date: string;
	format: string;
	day: string;
	weekday: Weekday2;
	month: Month2;
	year: string;
	designation: Designation;
}

interface Month2 {
	number: number;
	en: string;
}

interface Weekday2 {
	en: string;
}

interface Hijri {
	date: string;
	format: string;
	day: string;
	weekday: Weekday;
	month: Month;
	year: string;
	designation: Designation;
	holidays: unknown[];
	adjustedHolidays: unknown[];
	method: string;
}

interface Designation {
	abbreviated: string;
	expanded: string;
}

interface Month {
	number: number;
	en: string;
	ar: string;
	days: number;
}

interface Weekday {
	en: string;
	ar: string;
}

interface Times {
	Fajr: string;
	Sunrise: string;
	Dhuhr: string;
	Asr: string;
	Sunset: string;
	Maghrib: string;
	Isha: string;
	Imsak: string;
	Midnight: string;
	Firstthird: string;
	Lastthird: string;
}
