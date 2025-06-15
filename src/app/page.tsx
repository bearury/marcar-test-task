import { CarCard } from '@/entities/car/ui/CarCard';
import { CarSorting } from '@/features/car-sorting/ui/CarSorting';
import { Pagination } from '@/features/pagination/ui/Pagination';
import { fetchCars } from '@/services/api/cars';

interface SearchParams {
  page?: string;
  sort?: string;
  order?: 'asc' | 'desc';
}

export default async function Home({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const sort = params.sort || undefined;
  const order = params.order || undefined;

  const { data: cars, meta } = await fetchCars({
    page,
    sort: sort as 'price' | undefined,
    order,
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-stone-300">Наши автомобили</h1>
      <CarSorting />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.unique_id} car={car} />
        ))}
      </div>
      <Pagination totalPages={meta.last_page} />
    </main>
  );
}
