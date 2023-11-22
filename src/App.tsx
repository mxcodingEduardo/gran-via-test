import { Route, Routes } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

import { HomePage } from "./sections/home/HomePage";
import { LocationsPage } from "./sections/locations/LocationsPage";
import { NotFoundPage } from "./sections/not_found/NotFoundPage";
import { OrdersPage } from "./sections/orders/OrdersPage";

export function App() {
	return (
		<PrimeReactProvider>
			<div className="App">
				<Routes>
					<Route path="*" element={<NotFoundPage />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/locations" element={<LocationsPage />} />
					<Route path="/orders/:name" element={<OrdersPage />} />
				</Routes>
			</div>
		</PrimeReactProvider>
	);
}
