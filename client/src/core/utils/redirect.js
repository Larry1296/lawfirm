export const redirectByRole = (role) => {
  switch (role) {
    case "LAWYER":
      return "/lawyer/dashboard";

    case "ASSISTANT":
      return "/assistant/dashboard";

    case "CLIENT":
      return "/client/dashboard";

    default:
      return "/";
  }
};
