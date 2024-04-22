import Swal from "sweetalert2";

const showErrorMessage = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};
export default showErrorMessage;