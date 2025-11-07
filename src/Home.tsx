import MethodDropdown from "./components/MethodDropdown";
import NavbarComponent from "./components/Navbar";

const Home = () => {
	return (
		<>
			<NavbarComponent />
			<main className="flex flex-col justify-center items-center text-center h-[50vh] px-4">
				<MethodDropdown />
			</main>
		</>
	);
};

export default Home;
