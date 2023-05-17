import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components";

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
};

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <ProductCard  product={product} >
            <ProductCard.Image />
            <ProductCard.Title title={'sdaadsds'} />
            <ProductCard.Buttons />
          </ProductCard>

          <ProductCard product={product} >
            <ProductImage />
            <ProductTitle title={'hola editado'} />
            <ProductButtons />
          </ProductCard>
        </div>
    </div>
  )
}
