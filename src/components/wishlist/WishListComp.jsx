import { TbTrash } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setWishArr } from "../../store/WishlistSlice";
import { useAddCartMutation } from "../../store/api";

function WishListComp({ item }) {
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem("token"))

  const [addCart] = useAddCartMutation();

  function handleDelete() {
    dispatch(setWishArr(item));
  }

  function handleAddCart() {
    if (token) {
      let obj = {
        productId: item.id,
        count: 1,
        color: "RED",
        size: "S",
      };
      addCart(obj);
    } else {
      navigate(`/us/login`);
    }
  }

  return (
    <div className="py-3 relative flex md:flex-nowrap flex-wrap items-center border-b justify-between">
      <div className="flex w-full md:w-auto mb-5 md:mb-0 gap-6">
        <div>
          <img className="w-[114px] h-[140px]" src={item.images[0]} alt="" />
        </div>
        <div className="md:flex md:gap-6">
          <div>
            <p className="text-[.875rem] pr-6 md:pr-0 font-semibold">
              {item.name}
            </p>
            <span className="text-[.5623rem] text-[#999]">60 days left</span>
          </div>
          <div>
            <p className="text-[.875rem]">US$ {item.price}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-auto items-center gap-3">
        <button
          onClick={handleAddCart}
          className="md:min-w-[194px] block px-2 py-[10px] duration-300 hover:bg-black hover:text-white w-full uppercase text-[.875rem] rounded-[5px] border border-black"
        >
          Move to Bag
        </button>
        <button
          onClick={handleDelete}
          className="absolute md:static md:top-auto md:right-auto top-2 right-2"
        >
          <TbTrash />
        </button>
      </div>
    </div>
  );
}

export default WishListComp;
