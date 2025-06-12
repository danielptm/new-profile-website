"use client"

import Image from "next/image";
import LeftSide from "@/app/left-side/LeftSide";
import RightSide from "@/app/right-side/RightSide";
import {useEffect} from "react";

export default function Home() {

  return (
    <>
        <div>
            <LeftSide />
            <RightSide />
        </div>
    </>
  );
}
