import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckout() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	// Change/Update columns "status"  in the DB (Supabase)
	const { mutate: checkout, isLoading: isCheckingOut } =
		useMutation({
			mutationFn: (bookingId) =>
				updateBooking(bookingId, {
					status: "checked-out",
				}),

			// Toast for updating success
			onSuccess: (data) => {
				toast.success(
					`Booking #${data.id} successfully checked out`
				);
				// Stop another queries
				queryClient.invalidateQueries({ active: true });
				// Back to Home page
				navigate("/");
			},

			// Toast if error while checking in
			onError: () => {
				toast.error("An error occurs while checking out");
			},
		});

	return { checkout, isCheckingOut };
}
