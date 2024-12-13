// app/@modal/(.)photo/[href]/page.tsx
import React from "react";
import PhotoModalFetcher from "./PhotoModalFetcher";

interface PageProps {
  params: Promise<{ href: string }>;
}

export default async function Page({ params }: PageProps) {
  // Await the params if they are a promise
  const resolvedParams = await params;

  return <PhotoModalFetcher params={resolvedParams} />;
}
