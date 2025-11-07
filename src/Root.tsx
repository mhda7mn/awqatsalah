import { HeroUIProvider } from "@heroui/react";
import { Outlet } from "react-router";

function Root() {
	return (
		<HeroUIProvider>
			<main className="text-foreground bg-background min-h-screen">
				<Outlet />
			</main>
		</HeroUIProvider>
	);
}

export default Root;
