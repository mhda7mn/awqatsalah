import { useContext } from "react";
import { MethodContext } from "./MethodContext";

export const useMethod = () => {
	const ctx = useContext(MethodContext);
	if (!ctx)
		throw new Error("useMethod must be used within MethodProvider");
	return ctx;
};
