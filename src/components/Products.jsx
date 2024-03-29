import { Outlet } from "react-router-dom";
const Products = () => {
  return (
    <>
      <h1> This is Products inside Homepage</h1>
      <Outlet />

     
    </>
  );
};

export default Products;
