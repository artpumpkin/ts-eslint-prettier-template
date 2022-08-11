import { config } from 'dotenv';
config({});

import { add, multiply } from '@/utils';

console.log(add(5, multiply(2, 4)));
