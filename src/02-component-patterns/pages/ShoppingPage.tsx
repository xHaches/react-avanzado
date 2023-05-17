import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css'

export const ShoppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

          {
            products.map(product => (
              <ProductCard
                key={product.id}
                product={product} 
                className="bg-dark text-white"
                onChange={onProductCountChange}
                value={shoppingCart[product.id]?.count || 0}
              >
                <ProductImage className="custom-image" style={{
                  boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
                }} />
                <ProductTitle title={'hola editado'} className="text-white" />
                <ProductButtons className="custom-buttons" />
              </ProductCard>
            ))
          }

        </div>
        <div className="shopping-cart">
          {
            Object.entries(shoppingCart).map(([key, product]) => {
                return <ProductCard
                  key={key}
                  product={product} 
                  className="bg-dark text-white"
                  onChange={onProductCountChange}
                  value={product.count}
                  style={{
                    width: '100px',
                  }}
                >
                  <ProductImage className="custom-image" style={{
                    boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
                  }} />
                  <ProductButtons 
                    className="custom-buttons"
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  />
                </ProductCard>
            })
          }
        </div>
    </div>
  )
}
