import { ShopAPI } from "../../api/ShopAPI";
import { Location, Locations } from "../../types/location";

export async function getLocations(): Promise<Location[]> {
	try {
		const endpoint = `/locations`;
		const { data } = await ShopAPI.get<Locations>(endpoint);

		return data.locations;
	} catch (e) {
		return [];
	}
}
