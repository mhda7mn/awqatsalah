import { Button } from "@heroui/react";
import { useTheme } from "@heroui/use-theme";
import { Moon, Sun } from "lucide-react";

const ThemeChange = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			isIconOnly
			onPress={() => setTheme(theme === "light" ? "dark" : "light")}>
			{theme === "light" ? <Moon /> : <Sun />}
		</Button>
	);
};

export default ThemeChange;
