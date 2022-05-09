import React from 'react';
import fetchOrders from '../../lib/api/fetchOrders';
import { useQuery } from 'react-query';
import Order from './Order';

interface IOrdersProps {
  email: string;
}

const Orders: React.FC<IOrdersProps> = ({ email }) => {
  const { data, status } = useQuery('orders', () => fetchOrders(email));

  if (status === 'loading') return <p className="text-lg pt-4">Loading...</p>;
  if (status === 'error')
    return <p className="text-lg pt-4">Sorry, there was an error fetching your orders.</p>;
  if (data.length === 0) return <p className="text-lg pt-4">You have not ordered anything yet!</p>;

  return (
    <ul className="my-4">
      {data.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </ul>
  );
};

export default Orders;
