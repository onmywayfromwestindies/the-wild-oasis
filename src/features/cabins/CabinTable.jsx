/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";

import { useCabins } from "./useCabins";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

export default function CabinTable() {
	const { isLoading, cabins } = useCabins();
	const [searchParams] = useSearchParams();

	if (isLoading) return <Spinner />;

	if (!cabins.length) return <Empty ressourceName={"cabins"}/>

	// Manage filtering cabins
	// 1. Displaying all cabins by default
	const filterValue = searchParams.get("discount") || "all";

	// 2. Applying filter method on the cabins
	let filteredCabins;

	if (filterValue === "all") filteredCabins = cabins;
	if (filterValue === "no-discount")
		filteredCabins = cabins.filter(
			(cabin) => cabin.discount === 0
		);
	if (filterValue === "with-discount")
		filteredCabins = cabins.filter(
			(cabin) => cabin.discount > 0
		);

	// 3.Manage sorting cabins
	const sortBy =
		searchParams.get("sortBy") || "startDate-asc";
	const [field, direction] = sortBy.split("-");
	const modifier = direction === "asc" ? 1 : -1;
	const sortedCabins = filteredCabins.sort(
		(a, b) => (a[field] - b[field]) * modifier
	);

	return (
		<Menus>
			<Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 2fr">
				<Table.Header>
					<div></div>
					<div>Cabin</div>
					<div>Capacity</div>
					<div>Price</div>
					<div>Discount</div>
					<div></div>
				</Table.Header>

				<Table.Body
					// data={cabins}
					// data={filteredCabins}
					data={sortedCabins}
					render={(cabin) => (
						<CabinRow cabin={cabin} key={cabin.id} />
					)}
				/>
			</Table>
		</Menus>
	);
}
