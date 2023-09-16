import { styled } from 'styled-components';
import { AppGlobalStyles } from './global.styles';
import { PhotoButtonCard } from './components/PhotoButtonCard/PhotoButtonCard';

const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  place-items: center;

  // TODO: A color?
  background-color: #f2f2f2;
`;

export default function App() {
  return (
    <>
      <AppGlobalStyles />
      <Container>
        <PhotoButtonCard
          image="https://images.pexels.com/photos/12517600/pexels-photo-12517600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          description={
            <>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </>
          }
          buttonText="My button"
        />
      </Container>
    </>
  );
}
