import { ReactNode } from "react";
import { ContexProvider } from "./contextCadastro";
import { ContextHomeProvider } from "./contextHome";
import { ContextLoginProvider } from "./contextLogin";

interface childrenProps {
  children: ReactNode;
}

export const Providers = ({ children }: childrenProps) => {
  return (
    <ContexProvider>
      <ContextLoginProvider>
        <ContextHomeProvider>{children}</ContextHomeProvider>
      </ContextLoginProvider>
    </ContexProvider>
  );
};
