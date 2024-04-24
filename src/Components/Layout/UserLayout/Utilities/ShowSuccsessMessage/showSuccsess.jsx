import Swal from "sweetalert2";

const showSuccessMessage = message => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

export default showSuccessMessage
