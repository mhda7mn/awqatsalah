export interface LocationData {
	ip: string;
	country: string;
	countryCode: string;
	region: string;
	regionCode: string;
	city: string;
	location: {
		latitude: number;
		longitude: number;
	};
	timezone: string;
	flag: string;
	connection: {
		org: string;
	};
}
