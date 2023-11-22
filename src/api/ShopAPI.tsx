import axios from "axios";

export const ShopAPI = axios.create({
	baseURL: import.meta.env.VITE_API_URL as string,
	headers: {
		"Content-Type": "application/json",
	},
});
