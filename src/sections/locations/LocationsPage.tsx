import { LocationItem } from "./LocationItem";
import { getLocations } from "./getLocations";
import { useEffect, useState } from "react";
import { Location } from "../../types/location";

export function LocationsPage() {
	const [locations, setLocations] = useState<Location[] | []>([]);
	useEffect(() => {
		const fetchLocations = async () => {
			await getLocations().then((locations) => {
				setLocations(locations);
			});
		};
		void fetchLocations();
	}, []);

	return (
		<div>
			<h2>Boutiques</h2>

			<ul>
				{locations.map((location: Location) => (
					<li key={location.id}>
						<LocationItem location={location} />
					</li>
				))}
			</ul>
		</div>
	);
}
