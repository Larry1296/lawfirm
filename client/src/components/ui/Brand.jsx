import logo from "../../assets/images/logo.png";

export default function Brand({
  size = "h-12 w-12",
  textSize = "text-lg",
  showText = true,
  textColor = "",
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full">
      <img
        src={logo}
        alt="Sheria Desk Logo"
        className={`${size} rounded-2xl object-cover`}
      />

      {showText && (
        <span
          className={`font-extrabold ${textSize} ${
            textColor ||
            "text-[color:var(--brand-primary)] dark:text-[color:var(--brand-accent)]"
          }`}
        >
          Sheria Desk
        </span>
      )}
    </div>
  );
}
