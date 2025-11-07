import React, { useState } from "react";
import {
	PRAYER_METHODS,
	type MethodKey,
} from "../constants/prayerMethods";
import { MethodContext } from "./MethodContext";

export const MethodProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [selectedMethod, setSelectedMethod] = useState<MethodKey>(3);
	const methodName = PRAYER_METHODS[selectedMethod];

	return (
		<MethodContext.Provider
			value={{ selectedMethod, setSelectedMethod, methodName }}>
			{children}
		</MethodContext.Provider>
	);
};
