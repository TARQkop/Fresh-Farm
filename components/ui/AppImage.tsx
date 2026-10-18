import Image, { type ImageProps } from "next/image";
import { assetPath } from "@/lib/site";
// Single image entry point. Remote and local images are optimized by next/image.
export function AppImage(props: ImageProps) {
  const src = typeof props.src === "string" && props.src.startsWith("/") ? assetPath(props.src) : props.src;
  return <Image {...props} src={src} />;
}
