import { useMethod } from "../hooks/useMethod";
import {
	PRAYER_METHODS,
	type MethodKey,
} from "../constants/prayerMethods";
import { Select, SelectItem } from "@heroui/react";

const MethodDropdown = () => {
	const { selectedMethod, setSelectedMethod } = useMethod();

	return (
		<div className="min-w-xs">
			<Select
				className="max-w-xs"
				defaultSelectedKeys={[String(selectedMethod)]}
				label="Select Calculation Method">
				{Object.entries(PRAYER_METHODS).map(([key, name]) => (
					<SelectItem
						key={key}
						onClick={() =>
							setSelectedMethod(Number(key) as MethodKey)
						}>
						{name}
					</SelectItem>
				))}
			</Select>
		</div>
	);
};

export default MethodDropdown;
