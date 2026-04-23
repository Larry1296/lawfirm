import Swal from "sweetalert2";

/**
 * GLOBAL ALERT SYSTEM (SweetAlert2)
 * Keeps UI consistent across the legal platform
 * aligned with brand + dark mode
 */

const baseConfig = {
  confirmButtonColor: "#468432", // brand.primary
  cancelButtonColor: "#EF4444", // ui.danger
  background: "#ffffff",
  color: "#111827",
};

/* ===============================
   SUCCESS ALERT
================================= */
export const showSuccess = (title, text = "") => {
  return Swal.fire({
    ...baseConfig,
    icon: "success",
    title,
    text,
    confirmButtonText: "OK",
  });
};

/* ===============================
   ERROR ALERT
================================= */
export const showError = (title, text = "") => {
  return Swal.fire({
    ...baseConfig,
    icon: "error",
    title,
    text,
    confirmButtonText: "Try Again",
  });
};

/* ===============================
   WARNING ALERT
================================= */
export const showWarning = (title, text = "") => {
  return Swal.fire({
    ...baseConfig,
    icon: "warning",
    title,
    text,
    confirmButtonText: "Understood",
  });
};

/* ===============================
   INFO ALERT
================================= */
export const showInfo = (title, text = "") => {
  return Swal.fire({
    ...baseConfig,
    icon: "info",
    title,
    text,
    confirmButtonText: "OK",
  });
};

/* ===============================
   CONFIRMATION DIALOG
================================= */
export const confirmAction = async (title, text = "") => {
  const result = await Swal.fire({
    ...baseConfig,
    icon: "question",
    title,
    text,
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  });

  return result.isConfirmed;
};
