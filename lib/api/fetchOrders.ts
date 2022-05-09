const fetchOrders = async (email: string) => {
  const res = await fetch(`/api/customer/${email}`);
  const json = await res.json();

  return json.orders;
};

export default fetchOrders;
