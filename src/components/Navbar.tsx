import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@heroui/react";

const NavbarComponent = () => {
	return (
		<Navbar>
			<NavbarBrand className="hidden sm:flex">
				<p className="font-bold text-inherit">Awqat Salah</p>
			</NavbarBrand>
			<NavbarContent
				className="gap-4"
				justify="center">
				<p>Information</p>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>Theme</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
};

export default NavbarComponent;
