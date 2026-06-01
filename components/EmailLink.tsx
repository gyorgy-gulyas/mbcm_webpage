type Props = {
  email: string;
  dark?: boolean;
  className?: string;
};

export function EmailLink({ email, dark = false, className = "" }: Props) {
  return (
    <a
      href={`mailto:${email}`}
      className={`group relative inline-block py-1 leading-none ${className}`}
    >
      <span
        className={`transition-colors duration-200 ${
          dark
            ? "text-on-dark-soft group-hover:text-on-dark"
            : "text-foreground-soft group-hover:text-foreground"
        }`}
      >
        {email}
      </span>
      <span
        aria-hidden
        className={`absolute inset-x-0 -bottom-0.5 origin-left transition-all duration-300 ${
          dark ? "bg-on-dark" : "bg-foreground"
        } h-px opacity-30 group-hover:h-[2px] group-hover:opacity-100 group-hover:scale-x-[1.02]`}
      />
    </a>
  );
}
