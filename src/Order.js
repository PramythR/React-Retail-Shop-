import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./Order.css";
import OrderNew from "./OrderNew";
import { useStateValue } from "./StateProvider";
const Order = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          console.log(`ssssssssssss`, snapshot.docs);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            })),
          );
        });
    } else {
      setOrders([]);
    }
  }, []);
  console.log(`thhthhththtt`, orders);

  return (
    <div className="orders">
      <h2>Your Orders</h2>
      <div className="orders__order">
        {orders?.map((order) => (
          <OrderNew order={order} />
        ))}
      </div>
    </div>
  );
};

export default Order;
