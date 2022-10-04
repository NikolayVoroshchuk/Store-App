import Header from '../components/Header';

function MainLayout({ children }: JSX.ElementChildrenAttribute) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainLayout;
