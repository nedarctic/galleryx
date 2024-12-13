import PhotoModalFetcher from "./PhotoModalFetcher";

export default function Page({ params }: { params: { href: string } }) {
  return <PhotoModalFetcher params={params} />;
}