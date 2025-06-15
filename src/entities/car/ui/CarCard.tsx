'use client';

import Image from 'next/image';
import { CarIcon } from '@/entities/car/ui/icon/CarIcon';
import { Car } from '@/services/api/cars';
import { CarSpeed } from '@/entities/car/ui/icon/CarSpeed';

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={car.images.image[0]}
          alt={`${car.mark_id} ${car.folder_id}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 h-full">
        <div className="flex-auto">
          <h3 className="text-lg font-semibold mb-2 text-stone-300">
            {car.mark_id} {car.folder_id}
          </h3>
          <p className="text-xl font-bold text-blue-600 mb-2">
            {new Intl.NumberFormat('ru-RU', {
              style: 'currency',
              currency: 'RUB',
            }).format(car.price)}
          </p>
        </div>
        <div className="text-sm mt-auto text-gray-600">
          <p className="flex items-center gap-1">
            <CarIcon color="#4a5565" />
            {car.modification_id}
          </p>
          <p className="flex items-center gap-1">
            <CarSpeed color="#4a5565" />
            {car.run} км
          </p>
        </div>
      </div>
    </div>
  );
}
