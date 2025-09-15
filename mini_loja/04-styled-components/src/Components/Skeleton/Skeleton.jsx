import React from "react";
import styled, { keyframes } from "styled-components";

const shine = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

const Card = styled.div`
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
`;

const Thumb = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.skeleton}, #f0f0f0, ${({ theme }) => theme.colors.skeleton});
  background-size: 200% 100%;
  animation: ${shine} 1.2s infinite;
`;

const Content = styled.div`
  padding: 0.75rem;
`;

const Line = styled.div`
  height: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.skeleton}, #f0f0f0, ${({ theme }) => theme.colors.skeleton});
  background-size: 200% 100%;
  animation: ${shine} 1.2s infinite;
  width: ${({ w }) => w || "100%"};
`;

const Skeleton = () => {
  return (
    <Card aria-hidden="true">
      <Thumb />
      <Content>
        <Line w="90%" />
        <Line w="70%" />
        <Line w="40%" />
      </Content>
    </Card>
  );
};

export default Skeleton;
