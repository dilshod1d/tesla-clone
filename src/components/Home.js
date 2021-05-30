import styled from 'styled-components';
import Section from './Section';
function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for Touchless Delvery'
        backgroundImg='model-s.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Model y'
        description='Order Online for Touchless Delvery'
        backgroundImg='model-y.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Model 3'
        description='Order Online for Touchless Delvery'
        backgroundImg='model-3.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Model x'
        description='Order Online for Touchless Delvery'
        backgroundImg='model-x.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
      />
      <Section
        title='Lowest Cost Solar Panels in America'
        description='Money-back guarantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'
      />
      <Section
        title='Accessories'
        description=''
        backgroundImg='accessories.jpg'
        leftBtnText='Shop now'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
