'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export type SortOrder = 'asc' | 'desc' | null;

export function useCarSorting() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get('sort');
  const currentOrder = searchParams.get('order') as SortOrder;

  const handleSort = (sort: string | null, order: SortOrder) => {
    const params = new URLSearchParams(searchParams.toString());

    if (sort && order) {
      params.set('sort', sort);
      params.set('order', order);
    } else {
      params.delete('sort');
      params.delete('order');
    }

    router.push(`?${params.toString()}`);
  };

  return {
    currentSort,
    currentOrder,
    handleSort,
  };
}
