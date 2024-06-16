"use client"

import CardsMotors from "@/components/CardsMotors";
import Header from "@/components/Header";
import TopMain from "@/components/TopMain";

export default function Home() {
  return (
    <main className=" flex flex-col justify-center items-center">
        <div className="container mt-4 ">
          <Header />
        </div>
        <section className="container">
          <div className="w-full">
            <TopMain/>
            <div>
              <CardsMotors/>
            </div>
          </div>
        </section>
    </main>
  );
}
