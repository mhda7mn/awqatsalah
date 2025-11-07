import { HeroUIProvider } from "@heroui/react";
import { Outlet } from "react-router";
import { LocationProvider } from "./hooks/LocationProvider";

function Root() {
	return (
		<LocationProvider>
			<HeroUIProvider>
				<main className="text-foreground bg-background min-h-screen">
					<Outlet />
				</main>
			</HeroUIProvider>
		</LocationProvider>
	);
}

export default Root;
