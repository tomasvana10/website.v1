import React from "react";

export function ContentWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24 lg:py-0">
      <div className="lg-flex lg:justify-between lg:gap-4">{children}</div>
    </div>
  );
}

export function CardWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="card card-bordered backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="card-body gap-5">{children}</div>
    </div>
  );
}
