// app/@modal/photo/[href]/PhotoModal.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PhotoModal({ href }: { href: string }) {
    const router = useRouter();

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg relative max-w-lg">
                {/* Close button */}
                <button
                    onClick={() => router.back()}
                    className="absolute top-2 right-2 stroke-black"
                >
                    <span className="text-2xl">&times;</span>
                </button>

                {/* Image in modal */}
                <Image
                    src={`/${href}`}
                    alt="Modal Image"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}
