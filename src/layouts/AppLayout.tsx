import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";
import { ReactNode } from "react";
import { styled } from "styled-components";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StyledAppLayout>
      <Children>{children}</Children>
      <Navigation />
    </StyledAppLayout>
  );
};

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Children = styled.div`
  flex-grow: 1;
`;

export default AppLayout;
