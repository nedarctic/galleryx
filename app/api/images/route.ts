// app/api/images/route.ts
import fs from 'fs';
import path from 'path';

export async function GET() {
  const publicDir = path.join(process.cwd(), 'public');
  const imageFiles = fs.readdirSync(publicDir);

  // Filter for image files and create photo objects
  const photos = imageFiles
    .filter((file) => file.match(/\.(jpg|jpeg|png|gif)$/i)) // Only consider image files
    .map((file, index) => ({
      id: index + 1,
      href: file,
      alt: `Image ${index + 1}`,
    }));

  return new Response(JSON.stringify({ photos }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
