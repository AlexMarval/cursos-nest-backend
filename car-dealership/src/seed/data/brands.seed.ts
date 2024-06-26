import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Honda',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Jeep',
    createAt: new Date().getTime(),
  },
];
