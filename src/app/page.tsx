"use client"

import LeftSide from "@/app/left-side/LeftSide";
import RightSide from "@/app/right-side/RightSide";

export default function Home() {

  return (
    <div>
        <div className={'main-container'}>
            <LeftSide />
            <RightSide />
        </div>
    </div>
  );
}
