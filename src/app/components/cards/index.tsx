import Image, { ImageProps } from "next/image";
import { PropsWithChildren } from "react";

export const Card = ({
  children,
  ...props
}: PropsWithChildren & React.ComponentProps<"div">) => {
  return (
    <div
      className="flex flex-col gap-3 max-w-80 max-h-80 overflow-hidden bg-neutral-800 rounded"
      {...props}
    >
      {children}
    </div>
  );
};

export const CardImage = ({ alt, ...props }: ImageProps) => {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] w-full sm:w-80 h-28 relative">
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
        alt={alt ?? "imagem"}
        className="object-cover"
      />
    </div>
  );
};

export const CardHeader = ({
  children,
  ...props
}: PropsWithChildren & React.ComponentProps<"div">) => {
  return (
    <div className="px-3" {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  ...props
}: PropsWithChildren & React.ComponentProps<"div">) => {
  return (
    <h2 className="text-xl font-bold text-center text-neutral-200" {...props}>
      {children}
    </h2>
  );
};

export const CardDescription = ({
  children,
  ...props
}: PropsWithChildren & React.ComponentProps<"div">) => {
  return (
    <p className="text-neutral-400 text-center " {...props}>
      {children}
    </p>
  );
};

export const CardDiscountPrice = ({
  children,
}: PropsWithChildren & React.ComponentProps<"div">) => {
  return (
    <div className="flex gap-1 justify-center items-center text-emerald-500 font-mono font-bold text-2xl">
      {children}
    </div>
  );
};

export const CardGrossPrice = ({
  children,
}: PropsWithChildren & React.ComponentProps<"div">) => {
  return <sup className="line-through text-red-700 font-mono">{children}</sup>;
};

export const CardContent = ({
  children,
  ...props
}: PropsWithChildren & React.ComponentProps<"div">) => {
  return <div {...props}>{children}</div>;
};

export const CardFooter = ({
  children,
  ...props
}: PropsWithChildren & React.ComponentProps<"div">) => {
  return (
    <div className="px-3 pb-3" {...props}>
      {children}
    </div>
  );
};
