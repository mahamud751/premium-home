import Home_V1 from "./(home)/home-v1/page";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "The Premium Homes Ltd",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_V1 />
    </Wrapper>
  );
}
