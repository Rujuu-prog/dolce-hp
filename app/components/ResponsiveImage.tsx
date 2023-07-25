import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function ResponsiveImage({ className, src, alt }: Props) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      fill
      style={{
        objectFit: "cover",
      }}
    />
  );
}
