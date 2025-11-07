import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@heroui/react";
import NavbarModal from "./NavbarModal";
import ThemeChange from "./ThemeChange";

const NavbarComponent = () => {
	return (
		<Navbar>
			<NavbarBrand className="hidden sm:flex">
				<p className="font-bold text-inherit">Awqat Salah</p>
			</NavbarBrand>
			<NavbarContent
				className="gap-4"
				justify="center">
				<NavbarModal />
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<ThemeChange />
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default NavbarComponent;
