import Image from "next/image";
import LeftSide from "@/app/left-side/LeftSide";
import RightSide from "@/app/right-side/RightSide";

export default function Home() {
  return (
    <div className="">
        <LeftSide />
        <RightSide />
    </div>
  );
}
