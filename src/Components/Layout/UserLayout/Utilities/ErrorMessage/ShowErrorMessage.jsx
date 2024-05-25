import Swal from "sweetalert2";

const ShowErrorMessage = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};
export default ShowErrorMessage;
