import Header from "@/components/common/Header";
import React, { ReactNode } from "react";
import { styled } from "styled-components";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StyledAppLayout>
      <Header />
      <Children>{children}</Children>
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Children = styled.div`
  flex-grow: 1;
`;

export default AppLayout;
