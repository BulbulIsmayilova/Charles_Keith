import { Link, useNavigate } from "react-router-dom";

function SearchList({ item, setSearch, setValue }) {
  const navigate = useNavigate();
  return (
    <div className="flex gap-3">
      <div className="w-[30%]">
        <img
          onClick={() => {
            navigate(`/us/detail/${item.id}`);
            setSearch(false);
            setValue("");
          }}
          className="w-[102px] cursor-pointer h-[118px]"
          src={item.images[0]}
          alt={item.name}
        />
      </div>
      <div className="flex w-[70%] flex-col items-start gap-2">
        <p className="border border-[#ccc] uppercase text-[9px] px-1 py-[0.5px] rounded-sm">
          new
        </p>
        <p className="text-[14px] hover:underline">
          <Link
            onClick={() => {
              setSearch(false);
              setValue('')
            }}
            to={`/us/detail/${item.id}`}
          >
            {item.name}
          </Link>
        </p>
        <span className="text-[9px] text-[#999]">
          Item No. CK2-30782470_BLACK
        </span>
        <p className="text-[.875rem] font-normal">US$ {item.price}</p>
      </div>
    </div>
  );
}

export default SearchList;
