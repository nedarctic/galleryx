import PhotoModalFetcher from "./PhotoModalFetcher";

interface PageProps {
  params: {
    href: string; // Match the [href] dynamic route segment
  };
}

export default function Page({ params }: PageProps) {
  return <PhotoModalFetcher params={params} />;
}