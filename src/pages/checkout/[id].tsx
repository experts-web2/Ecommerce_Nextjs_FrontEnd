import { RiDeleteBinLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart } from "@/slices/CartSlice";
const Checout = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state);
  const [totalCard, setTotalCard] = useState<any>([]);
  useEffect(() => {
    setTotalCard(count?.cart?.items);
  }, [count?.cart?.items]);


  const handleEdit = (id: any) => {
    console.log(id);
    
  };

  const handleDelete = (id: any) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10">
  <h1 className="text-2xl font-bold mb-5">Checkout</h1>
  {totalCard.map((item: any) => (
    <div key={item.id} className="flex items-center justify-between mb-3">
      <div>
        <h1 className="text-lg font-semibold">{item.name}</h1>
        <h1 className="text-gray-500 text-sm">Price: ${item.price}</h1>
        <h1 className="text-gray-500 text-sm">
          Quantity: {item.quantity}
        </h1>
      </div>
      <div>
        <h1 className="text-gray-500 text-sm">
          Total: ${item.price * item.quantity}
        </h1>
      </div>
      <div>
        <button onClick={() => handleEdit(item.id)}>
          Edit
        </button>
        <button onClick={() => handleDelete(item.id)}>
          <RiDeleteBinLine className="text-red-500" size={20} />
        </button>
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default Checout;
