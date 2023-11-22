import { ShopAPI } from "../../api/ShopAPI";
import { Location } from "../../types/location";

export async function getLocation(id: string): Promise<Location> {
	const endpoint = `/location`;
	const { data } = await ShopAPI.get<Location>(endpoint, {
		params: {
			id,
		},
	});

	return data;
}
