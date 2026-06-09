import Image from "next/image";

type NarratorCardProps = {
  name: string;
  image: string;
};

export default function NarratorCard({ name, image }: NarratorCardProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white py-8 px-2 shadow-sm">
      <div className="relative mb-4 h-20 w-20 md:w-30 md:h-30 overflow-hidden rounded-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{name}</h3>
    </div>
  );
}
