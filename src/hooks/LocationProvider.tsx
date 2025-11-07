import { useEffect, useState } from "react";
import geoCodingIP from "../lib/geocoding.fn";
import type { LocationData } from "../types/context.types";
import { LocationContext } from "./LocationContext";

export const LocationProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [location, setLocation] = useState<LocationData | null>(null);
	const [error, setError] = useState<string>("");
	const [loading, setLoading] = useState(true);

	const fetchLocation = async () => {
		try {
			const response = await geoCodingIP();
			setLocation(response);
		} catch (err: unknown) {
			setError(`Failed to fetch location data ${err}`);
		} finally {
			setLoading(true);
		}
	};

	useEffect(() => {
		fetchLocation();
	}, []);

	return (
		<LocationContext.Provider value={{ location, loading, error }}>
			{children}
		</LocationContext.Provider>
	);
};
