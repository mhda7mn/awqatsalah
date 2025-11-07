import { createContext } from "react";
import type { LocationData } from "../types/context.types";

interface LocationContextType {
	location: LocationData | null;
	loading: boolean;
	error: string | null;
}

export const LocationContext =
	createContext<LocationContextType | null>(null);
