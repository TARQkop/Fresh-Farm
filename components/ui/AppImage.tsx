import Image, { type ImageProps } from "next/image";
// Single image entry point. Remote and local images are optimized by next/image.
export function AppImage(props: ImageProps) {
  return <Image {...props} />;
}
