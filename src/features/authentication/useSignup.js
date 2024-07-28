/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
	const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,


		onSuccess: (user) => {
			toast.success(
				"Account successfully created ! Please verify the new account from the user's email address "
			);
		},

		// onError: (err) => {
		// 	console.log("Error", err);

		// 	toast.error(
		// 		"An error is occurred. Check your fields"
		// 	);
		// },
	});

	return { signup, isLoading };
}
