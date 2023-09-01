import { useEffect, useState } from "react";

let expAllProductsInfoArr = [];
export { expAllProductsInfoArr };

export default function FakeApi() {
  const [jeweleryProductsInfoArr, setJeweleryProductsInfoArr] = useState(null);
  const [menProductsInfoArr, setMenProductsInfoArr] = useState(null);
  const [womenProductsInfoArr, setWomenProductsInfoArr] = useState(null);

  const [AllProductsInfoArr, setAllProductsInfoArr] = useState(null);

  expAllProductsInfoArr = AllProductsInfoArr;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => setJeweleryProductsInfoArr(json));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => setMenProductsInfoArr(json));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => setWomenProductsInfoArr(json));
  }, []);

  useEffect(() => {
    if (
      jeweleryProductsInfoArr !== null &&
      menProductsInfoArr !== null &&
      womenProductsInfoArr !== null
    ) {
      let combinedProductsInfoArr = [
        ...jeweleryProductsInfoArr,
        ...menProductsInfoArr,
        ...womenProductsInfoArr,
      ];

      combinedProductsInfoArr.map((Element, index) => {
        //adding new properity for count
        Element.choosNum = 0;
      });

      setAllProductsInfoArr(combinedProductsInfoArr);
    }
  }, [jeweleryProductsInfoArr, menProductsInfoArr, womenProductsInfoArr]);

  function SubButtonHandler(index) {
    const copyAllProductsInfoArr = [...AllProductsInfoArr];
    //important lesson
    //[...] deep copy for arrays
    //{...} deep copy for objects

    // Increase the choosNum property for the selected product
    copyAllProductsInfoArr[index].choosNum -= 1;

    setAllProductsInfoArr(copyAllProductsInfoArr);
  }

  function AddButtonHandler(index) {
    const copyAllProductsInfoArr = [...AllProductsInfoArr];

    // Increase the choosNum property for the selected product
    copyAllProductsInfoArr[index].choosNum += 1;

    setAllProductsInfoArr(copyAllProductsInfoArr);
  }

  function handleInputChange(params) {} /////////// empty made it just for a warning

  return (
    AllProductsInfoArr && (
      <>
        <div className="All-products">
          <h1> {console.log(AllProductsInfoArr)}</h1>
          <h1>
            {console.log("this is choos num " + AllProductsInfoArr[0].choosNum)}
          </h1>
          {AllProductsInfoArr.map(
            (product, index) =>
              product.image && (
                <div className="card-product" key={product.id}>
                  <img src={product.image} alt={"placeholder text"} />
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <div className="All-cart-buttons">
                    <div className="SubAndPlus">
                      <button onClick={() => SubButtonHandler(index)}>-</button>
                      <input
                        type="number"
                        name=""
                        id=""
                        onChange={handleInputChange}
                        placeholder="0"
                        value={product.choosNum}
                      />
                      <button onClick={() => AddButtonHandler(index)}>+</button>
                    </div>
                    <button>Add to cart</button>
                  </div>
                </div>
              )
          )}
        </div>
      </>
    )
  );
}
