// app/@modal/photo/[href]/PhotoModalFetcher.tsx
import React from "react";
import PhotoModal from "./PhotoModal";

interface PhotoModalFetcherProps {
  params: Promise<{ href: string }>; // Explicitly define params as a Promise
}

export default async function PhotoModalFetcher({ params }: PhotoModalFetcherProps) {
  // Await the resolution of the params promise
  const resolvedParams = await params;

  // Extract the `href` value
  const href = resolvedParams.href;

  // Pass the `href` to the client component
  return <PhotoModal href={href} />;
}
