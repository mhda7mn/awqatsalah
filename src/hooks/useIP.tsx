import { useContext } from "react";
import { LocationContext } from "./LocationContext";

export const useIP = () => {
	const context = useContext(LocationContext);
	if (!context) {
		throw new Error("useIP must be used within LocationProvider");
	}
	return context;
};
