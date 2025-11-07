import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Button,
} from "@heroui/react";
import { useIP } from "../hooks/useIP";
import { Loader2 } from "lucide-react";
import MethodDropdown from "./MethodDropdown";

const NavbarModal = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const { location, error, loading } = useIP();

	const locationInfo = [
		{
			title: "Country",
			content: `${location?.country} (${location?.countryCode})`,
		},
		{
			title: "Region",
			content: `${location?.region} (${location?.regionCode})`,
		},
		{ title: "City", content: location?.city },
		{ title: "Time Zone", content: location?.timezone },
		{ title: "IP Address", content: location?.ip },
		{
			title: "Location (Lat, Long)",
			content: `${location?.location.latitude}, ${location?.location.longitude}`,
		},
	];

	return (
		<>
			<Button
				onPress={onOpen}
				variant="bordered">
				{error && "Error Fetching Location"}
				{loading && <Loader2 className="animate-spin" />}
				{location?.flag} {location?.country} | {location?.region}
			</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-4">
								Location Information
							</ModalHeader>
							<ModalBody>
								<div className="grid grid-cols-2 gap-5">
									{locationInfo.map((val, i) => (
										<div
											className="space-x-2 bg-default-100 rounded-md p-3"
											key={i}>
											<h3 className="text-md font-semibold text-default-600">
												{val.title}:
											</h3>
											<p className="text-sm text-default-900">
												{val.content || "-"}
											</p>
										</div>
									))}
								</div>
								<div className="flex flex-col justify-center items-center">
									<MethodDropdown />
								</div>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									onPress={onClose}>
									Close
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default NavbarModal;
