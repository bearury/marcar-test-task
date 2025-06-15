import { SortOrder } from '@/features/car-sorting/model/useCarSorting';
import { Loader } from './Loader';

interface PropsButton {
  isPending: boolean;
  handleClick: (sort: string | null, order: SortOrder) => void;
  currentSort: string | null;
  currentOrder: SortOrder;
  sortOrder: SortOrder;
}

export function Button({ isPending, currentSort, currentOrder, handleClick, sortOrder }: PropsButton) {
  function getValue() {
    if (sortOrder === 'asc') {
      return 'По возрастанию';
    } else if (sortOrder === 'desc') {
      return 'По убыванию';
    } else {
      return 'По умолчанию';
    }
  }

  return (
    <button
      onClick={() => handleClick('price', sortOrder)}
      disabled={isPending}
      className={`px-4 py-2 rounded w-40 max-md:w-36 max-md:px-2 ${
        (currentSort === 'price' && currentOrder === sortOrder) || (!currentSort && sortOrder === null)
          ? 'bg-blue-600 text-white'
          : 'bg-gray-200'
      } disabled:opacity-50 disabled:cursor-auto cursor-pointer not-disabled:active:bg-gray-300 transition-colors`}
    >
      {isPending ? <Loader /> : getValue()}
    </button>
  );
}
