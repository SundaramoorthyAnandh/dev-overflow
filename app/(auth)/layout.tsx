import React, { ReactNode } from "react";

type TAuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: TAuthLayoutProps) => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
