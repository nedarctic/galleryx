"use client";

import Link from 'next/link';
import Image from 'next/image';
import { bodoniModa } from './components/fonts';
import { useEffect, useState } from 'react';

type Photo = {
  id: number;
  href: string;
  alt: string;
};

const Home = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // Fetch images from the API route
    const fetchImages = async () => {
      const res = await fetch('/api/images');
      const data = await res.json();
      setPhotos(data.photos);
    };

    fetchImages();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className={`${bodoniModa.className} font-bold text-4xl sm:font-extrabold sm:text-8xl p-4`}>
        GalleryX
      </h1>
      <div className="columns-2 gap-2 sm:columns-3 lg:columns-4 p-4">
        {photos.map((photo) => (
          <div key={photo.id} className="mb-2 break-inside-avoid">
            <Link href={`/photo/${photo.href}`}>
              <Image
                src={`/${photo.href}`}
                alt={photo.alt}
                width={200}
                height={0}
                className="w-full rounded-lg shadow-md"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
