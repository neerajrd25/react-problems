import axios from 'axios';
import category from '../data/category.json';
import { useSWR } from '../hooks/swr.hook';

export const SWR = () => {
  const url = Math.random() > 0.5 ? '/data/category.json' : 'https://fjdnjndjcn.com';
  const fetcher = () => axios.get(url);
  const { data, error } = useSWR('/api', fetcher)
  if (error) console.log(error);
  if (error) return <div>failed</div>
  if (!data) return <div>loading</div>
  return <div>succeeded</div>
}