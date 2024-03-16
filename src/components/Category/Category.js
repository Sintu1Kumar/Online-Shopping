import { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import "./Category.css";

const productsArr = [1, 2, 3, 4];

const Category = () => {
  const cartCtx = useContext(CartContext);
  let product;
  const addToCartHandler = (e) => {
    let productId = parseInt(e.target.id);
    product = cartCtx.items.find((item) => item.id === productId);
    if (!product) {
      product = productsArr.find((item) => item.id === productId);
    }
    return cartCtx.addProduct(product);
  };

  return (
    <Container className="mb-5">
      <h2 className="text-center fw-bold mt-4">Products</h2>
      <Row xs={1} md={2} lg={2} className="g-4 justify-content-center">
        {productsArr.map((product, index) => {
          return (
            <Col
              key={index}
              className="d-flex align-items-center justify-content-center"
            >
              <Card style={{ width: "18rem" }} className="mt-4 shadow-lg">
                <Card.Body>
                  <div className="zoom-image-container">
                    <Card.Img
                      variant="top"
                      src={product.imageUrl}
                      className="zoom-image"
                    />
                  </div>
                  <Card.Title className="text-center my-3">
                    {product.title}
                  </Card.Title>
                  <Card.Text className="d-flex justify-content-between">
                    <span className="fw-bold fs-4">
                      <span>&#8377;</span>
                      {product.price}
                    </span>
                    <Button
                      id={product.id}
                      variant="primary"
                      onClick={addToCartHandler}
                    >
                      Add To Cart
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Category;
