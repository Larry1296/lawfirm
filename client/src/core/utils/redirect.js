export const redirectByRole = (role) => {
  switch (role) {
    case "admin":
      return "/admin/dashboard";

    case "lawyer":
      return "/lawyer/dashboard";

    case "assistant":
      return "/assistant/dashboard";

    case "client":
      return "/client/dashboard";

    default:
      return "/";
  }
};
