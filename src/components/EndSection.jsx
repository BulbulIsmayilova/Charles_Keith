import EndSectionForm from "./formik/EndSectionForm";

function EndSection() {
    
    return (
    <div className="flex flex-col items-center max-w-full min-h-[243px] bg-[#f8f8f8] py-[15px]">
      <p className="text-[18px] md:text-[24px] text-[#333] text-center font-semibold py-[5px]">SUBSCRIBE TO THE LATEST FASHION NEWS</p>
      <p className="text-[14px] font-light my-[5px] text-[#333]">Get 10% off when you subscribe to our newsletter.</p>
      <div className="w-full">
        <EndSectionForm />
      </div>
      <p className="infolink text-[12px] my-[5px] text-[#333]">
        By subscribing, you agree to CHARLES & KEITH’s{" "}
      </p>
    </div>
  );
}

export default EndSection;
