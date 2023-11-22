import { ShopAPI } from "../../api/ShopAPI";
import { Order } from "../../types/orders";

export async function getOrders(name: string): Promise<Order[]> {
	try {
		const endpoint = "/orders";
		const { data } = await ShopAPI.get<Order[]>(endpoint, {
			params: {
				name,
			},
		});

		return data;
	} catch (e) {
		return [];
	}
}
