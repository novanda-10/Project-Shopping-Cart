import { expAllProductsInfoArr } from "./FakeApi";
export default function Cart() {
  let CopyexpAllProductsInfoArr = [...expAllProductsInfoArr];

  let totalCost = 0;
  // Filter the array
  const filteredItems = CopyexpAllProductsInfoArr.filter((Element) => {
    return Element.choosNum > 0;
  });

  function handleInputChange(params) {} /////////// empty made it just for a warning

  return (
    <>
      <h1>cart</h1>
      <h1>{console.log("this is cart")}</h1>
      <h1>{console.log(CopyexpAllProductsInfoArr)}</h1>
      <h1>{console.log("this is filterd cart")}</h1>
      <h1>{console.log(filteredItems)}</h1>

      {filteredItems.map(
        (product, index) =>
          product.image && (
            <div className="card-product" key={product.id}>
              <img src={product.image} alt={"placeholder text"} />
              <p>{product.title}</p>
              <p>{product.price}</p>
              <div className="All-cart-buttons">
                <div className="SubAndPlus">
                  <input
                    type="number"
                    name=""
                    id=""
                    onChange={handleInputChange}
                    placeholder="0"
                    value={product.choosNum}
                  />
                </div>
              </div>
            </div>
          )
      )}

      <div className="total-cost">
        {filteredItems.forEach((element) => {
          totalCost += element.price * element.choosNum;
        })}

        <h1>{"total cost: " + totalCost}</h1>
      </div>
    </>
  );
}
