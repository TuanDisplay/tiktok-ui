import Header from "./Header";

function HeaderOnly({ children }) {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
    </>
  );
}

export default HeaderOnly;
