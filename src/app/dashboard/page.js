"use client";
import {useRouter} from "next/navigation";
import React from "react";

const DashboardPage = () => {
  const router = useRouter();
  const logout = async () => {
    const res = await fetch("/api/login");
    const json = await res.json();
    if (json["status"] === true) {
      router.replace("/");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Hello dashboard</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default DashboardPage;
