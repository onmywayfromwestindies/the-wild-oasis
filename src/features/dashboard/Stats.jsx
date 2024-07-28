/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
	HiOutlineBanknotes,
	HiOutlineBriefcase,
	HiOutlineCalendarDays,
	HiOutlineChartBar,
} from "react-icons/hi2";

export default function Stats({
	bookings,
  confirmedStays,
  numDays,
  cabinsCount
}) {
	// 1. Number of bookings
	const numBookings = bookings.length;

	// 2. Counting total price of bookings
	const sales = bookings.reduce(
		(acc, cur) => acc + cur.totalPrice,
		0
  );
  
	// 3. Number of check-ins
	const checkins = confirmedStays.length;

	// 4. Occupancy rate
	const occupation = confirmedStays.reduce(
		(acc, cur) => acc + cur.numNights, 0
	) / (numDays * cabinsCount);

	return (
		<>
			<Stat
				title="Bookings"
				color="blue"
				icon={<HiOutlineBriefcase />}
				value={numBookings}
			/>
			<Stat
				title="Sales"
				color="green"
				icon={<HiOutlineBanknotes />}
				value={formatCurrency(sales)}
			/>
			<Stat
				title="Check ins"
				color="indigo"
				icon={<HiOutlineCalendarDays />}
				value={checkins}
			/>
			<Stat
				title="Occupancy rate"
				color="yellow"
				icon={<HiOutlineChartBar />}
				value={Math.round(occupation * 100) + "%"}
			/>
		</>
	);
}
