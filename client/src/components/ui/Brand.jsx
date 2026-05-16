import logo from "../../assets/images/logo.png";

export default function Brand({ size = "h-12 w-12", textSize = "text-lg" }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="Sheria Desk Logo"
        className={`${size} rounded-2xl object-cover`}
      />
      <span className={`font-extrabold ${textSize} text-[color:var(--brand-primary)] dark:text-[color:var(--brand-accent)]`}>
        Sheria Desk
      </span>
    </div>
  );
}