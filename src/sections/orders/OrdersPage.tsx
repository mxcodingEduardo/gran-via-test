import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Order } from "../../types/orders";
import { getOrders } from "./getOrders";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export function OrdersPage() {
	const { name } = useParams();
	const [orders, setOrders] = useState<Order[] | []>([]);

	useEffect(() => {
		const fetchOrders = async () => {
			await getOrders(name).then((orders) => {
				setOrders(orders);
			});
		};
		void fetchOrders();
	}, [name]);

	return (
		<>
			<p>Órdenes para la boutique {name}</p>

			<DataTable value={orders} tableStyle={{ minWidth: "50rem" }}>
				<Column field="name" header="ID"></Column>
				<Column field="confirmation_number" header="# Confirmacion"></Column>
				<Column field="currency" header="Moneda"></Column>
				<Column field="current_subtotal_price" header="Subtotal"></Column>
				<Column field="email" header="Email"></Column>
				<Column field="processed_at" header="Fecha"></Column>
			</DataTable>
		</>
	);
}
