import { useEffect, useRef } from "react";

export default function useOutsideClick(
	handler,
	listenCapturing = true
) {
	// Close modal window when click is detected outside the modal window
	const ref = useRef();

	useEffect(() => {
		function handleClick(e) {
			if (ref.current && !ref.current.contains(e.target)) {
				handler();
			}
		}

		document.addEventListener(
			"click",
			handleClick,
			listenCapturing
		);

		return () =>
			document.removeEventListener(
				"click",
				handleClick,
				listenCapturing
			);
	}, [handler, listenCapturing]);

	return ref;
}
