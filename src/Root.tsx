import { HeroUIProvider } from "@heroui/react";
import { Outlet } from "react-router";

function Root() {
	return (
		<div>
			<HeroUIProvider>
				<Outlet />
			</HeroUIProvider>
		</div>
	);
}

export default Root;
