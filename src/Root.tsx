import { HeroUIProvider } from "@heroui/react";
import { Outlet } from "react-router";
import { LocationProvider } from "./hooks/LocationProvider";
import { MethodProvider } from "./hooks/MethodProvider";

function Root() {
	return (
		<LocationProvider>
			<MethodProvider>
				<HeroUIProvider>
					<main className="text-foreground bg-background min-h-screen">
						<Outlet />
					</main>
				</HeroUIProvider>
			</MethodProvider>
		</LocationProvider>
	);
}

export default Root;
