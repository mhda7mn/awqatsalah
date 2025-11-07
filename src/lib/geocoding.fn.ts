import type { RootObject } from "../types/ip.types";

const geoCodingIP = async () => {
	const response = await fetch("https://api.ipwho.org/me");
	const data: RootObject = await response.json();
	return {
		ip: data.data.ip,
		country: data.data.country,
		countryCode: data.data.countryCode,
		region: data.data.region,
		regionCode: data.data.regionCode,
		city: data.data.city,
		location: {
			latitude: data.data.latitude,
			longitude: data.data.longitude,
		},
		timezone: data.data.timezone,
		flag: data.data.flag.flag_Icon,
		connection: {
			org: data.data.connection.org,
		},
	};
};

export default geoCodingIP;
