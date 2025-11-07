import { createContext } from "react";
import type { MethodKey } from "../constants/prayerMethods";

interface MethodContextType {
	selectedMethod: MethodKey;
	setSelectedMethod: (key: MethodKey) => void;
	methodName: string;
}

export const MethodContext = createContext<MethodContextType | null>(
	null
);
