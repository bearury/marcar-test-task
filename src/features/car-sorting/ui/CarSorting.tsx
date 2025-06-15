'use client';

import { SortOrder, useCarSorting } from '../model/useCarSorting';
import { useTransition } from 'react';
import { Button } from '@/shared/ui/Button';

export function CarSorting() {
  const { currentSort, currentOrder, handleSort } = useCarSorting();
  const [isPending, startTransition] = useTransition();

  const handleSortClick = (sort: string | null, order: 'asc' | 'desc' | null) => {
    startTransition(() => {
      handleSort(sort, order);
    });
  };

  const buttons = [null, 'asc', 'desc'] as SortOrder[];

  return (
    <div className="mb-6">
      <div className="flex gap-4 max-md:gap-2 max-sm:flex-col sx:border border-green-500">
        {buttons.map((b) => (
          <Button
            key={b}
            sortOrder={b}
            currentOrder={currentOrder}
            currentSort={currentSort}
            isPending={isPending}
            handleClick={handleSortClick}
          />
        ))}
      </div>
    </div>
  );
}
