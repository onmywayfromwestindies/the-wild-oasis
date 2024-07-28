import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabineTable from "./CabinTable";

export default function AddCabin() {
	return (
		<Modal>
			<Modal.Open opens="cabin-form">
				<Button>Add new cabin</Button>
			</Modal.Open>

			<Modal.Window name="cabin-form">
				<CreateCabinForm />
			</Modal.Window>

			<Modal.Open opens="table">
				<Button>Show table</Button>
			</Modal.Open>

			<Modal.Window name="table">
				<CabineTable />
			</Modal.Window>
		</Modal>
	);
}
