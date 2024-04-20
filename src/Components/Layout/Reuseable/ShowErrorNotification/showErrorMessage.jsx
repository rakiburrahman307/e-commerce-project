import Swal from "sweetalert2";

const showErrorMessage = (message, footerText) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    footer: footerText ? `<p>${footerText}</p>` : null,
  });
};
