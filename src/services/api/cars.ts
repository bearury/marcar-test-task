const API_BASE_URL = 'https://testing-api.ru-rating.ru';

export async function fetchCars(params: CarsQueryParams): Promise<CarsResponse> {
  const searchParams = new URLSearchParams({
    _limit: '12',
    _page: params.page?.toString() || '1',
  });

  if (params.sort) {
    searchParams.append('_sort', params.sort);
    searchParams.append('_order', params.order || 'asc');
  }

  const response = await fetch(`${API_BASE_URL}/cars?${searchParams.toString()}`);

  if (!response.ok) {
    throw new Error('Failed to fetch cars');
  }

  return response.json();
}

export interface Car {
  availability: string;
  body_type: string;
  body_type_eng: string;
  booking_allowed: boolean;
  brand_rel: { slug: string; count: number; name: string };
  color: string;
  color_eng: string;
  complectation_name: string;
  currency: string;
  custom: string;
  drive: string;
  engine_power: string;
  engine_power_num: number;
  engine_type: string;
  engine_type_eng: string;
  engine_volume: number;
  exchange: string;
  extras: string;
  folder_id: string;
  gearbox: string;
  gearbox_eng: string;
  generation_name: string;
  generation_rel: { slug: string; count: number; name: string };
  images: { image: string[] };
  images_amount: number;
  mark_cyrillic_name: string;
  mark_id: string;
  metallic: string;
  model_cyrillic_name: string;
  model_name: string;
  model_rel: { slug: string; count: number; name: string };
  modification_id: string;
  offer_type: string;
  owners_number: string;
  owners_number_num: number;
  price: number;
  pts: string;
  registry_year: number;
  run: number;
  state: string;
  tech_param_id: number;
  unique_id: number;
  updated_at: string;
  video: string;
  vin: string;
  wheel: string;
  year: number;
}

export interface CarsResponse {
  data: Car[];
  meta: {
    count: number;
    first_page_link: string;
    from: number;
    last_page: number;
    last_page_link: string;
    limit: number;
    next_page_link: string;
    page: number;
    prev_page_link: string;
    to: number;
    total: number;
    total_no_filters: number;
  };
}

export interface CarsQueryParams {
  page?: number;
  sort?: 'price';
  order?: 'asc' | 'desc';
}
