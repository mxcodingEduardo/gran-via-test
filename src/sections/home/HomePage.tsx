import { Link } from "react-router-dom";

export function HomePage() {
	return (
		<div>
			<h1>Gran Vía Test</h1>

			<Link to="/locations">Órdenes por Boutiques</Link>
		</div>
	);
}
