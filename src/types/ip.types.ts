export interface RootObject {
	success: boolean;
	data: Data;
}

interface Data {
	ip: string;
	continent: string;
	continentCode: string;
	country: string;
	countryCode: string;
	capital: string;
	region: string;
	regionCode: string;
	city: string;
	postal_Code: null;
	dial_code: string;
	is_in_eu: boolean;
	latitude: number;
	longitude: number;
	accuracy_radius: number;
	timezone: Timezone;
	flag: Flag;
	currency: Currency;
	connection: Connection;
	security: Security;
}

interface Security {
	isVpn: boolean;
	isTor: boolean;
	isThreat: string;
}

interface Connection {
	number: number;
	org: string;
}

interface Currency {
	code: string;
	symbol: string;
	name: string;
	name_plural: string;
	hex_unicode: string;
}

interface Flag {
	flag_Icon: string;
	flag_unicode: string;
}

interface Timezone {
	time_zone: string;
	abbr: string;
	offset: number;
	is_dst: boolean;
	utc: string;
	current_time: string;
}
