import styled from "@emotion/styled";
import { useCallback } from "react";
interface Props {
  itemList: string[];
}

const CarouselContainer = styled.div`
  width: 100%;
  height: 200px;
`;
const Item = styled.div``;

function CarouselWithScroll({ itemList }: Props) {
  const itemGen = useCallback(() => {
    const contents = [];
    for (const i in itemList) {
      contents.push(<Item key={`carousel item ${i}`}>{i}</Item>);
    }
    return contents;
  }, [itemList]);
  return <CarouselContainer>{itemGen()}</CarouselContainer>;
}

export default CarouselWithScroll;
