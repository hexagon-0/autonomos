import { createContext } from 'react';
import PocketBaseClient from 'pocketbase';

const PocketBase = createContext(new PocketBaseClient('http://10.0.2.2:8090'))

export default PocketBase
