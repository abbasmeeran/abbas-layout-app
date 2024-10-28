import clsx from "clsx";

type Props = {
  className?: string;
  label?: string;
  children: React.ReactNode;
};

function Icon({ className = "", label = "", children }: Props) {
  return (
    <div className={clsx(className, "my-4")}>
      <div className="size-8">{children}</div>
      <div className="text-xs">{label}</div>
    </div>
  );
}

export default Icon;
