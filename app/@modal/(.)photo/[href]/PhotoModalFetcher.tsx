// app/@modal/photo/[href]/PhotoModalFetcher.tsx
import React from "react";
import PhotoModal from "./PhotoModal";

export default async function PhotoModalFetcher({ params }: { params: { href: string } }) {
    // Fetch or resolve the `href` value
    const href = await params.href;

    // Pass the `href` to the client component
    return <PhotoModal href={href} />;
}
