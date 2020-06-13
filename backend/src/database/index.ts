import { createConnection } from 'typeorm';

try {
  createConnection();
} catch (error) {
  console.log(error.message);
}

