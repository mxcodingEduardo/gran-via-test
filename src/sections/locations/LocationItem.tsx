import { Link } from "react-router-dom";

import { Location } from "../../types/location";

export function LocationItem({ location }: { location: Location }) {
	return <Link to={`/orders/${location.name}`}>{location.name}</Link>;
}
