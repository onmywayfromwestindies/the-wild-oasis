import {
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	// Change/Update columns "status & isPaid"  in the DB (Supabase)
	const { mutate: checkin, isLoading: isCheckingIn } =
		useMutation({
			mutationFn: ({ bookingId, breakfast }) =>
				updateBooking(bookingId, {
					status: "checked-in",
					isPaid: true,
					...breakfast,
				}),

			// Toast for updating success
			onSuccess: (data) => {
				toast.success(
					`Booking #${data.id} successfully checked in`
				);
				// Stop another queries
				queryClient.invalidateQueries({ active: true });
				// Back to Homepage
				navigate("/");
			},

			// Toast if error while checking in
			onError: () => {
				toast.error("An error occurs while checking in");
			},
		});

	return { checkin, isCheckingIn };
}
