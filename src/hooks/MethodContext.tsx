import { createContext } from "react";

interface MethodContextType {
	selectedMethod: Methods;
	setSelectedMethod: (method: Methods) => void;
}

export const MethodContext = createContext<MethodContextType | null>(
	null
);
