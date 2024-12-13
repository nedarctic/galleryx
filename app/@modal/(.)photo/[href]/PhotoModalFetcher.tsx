// app/@modal/(.)photo/[href]/PhotoModalFetcher.tsx
import React from "react";
import PhotoModal from "./PhotoModal";

export default function PhotoModalFetcher({ params }: { params: { href: string } }) {
  const href = params.href;

  return <PhotoModal href={href} />;
}
