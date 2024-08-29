import { Button, Card } from "react-bootstrap";
import formatCurrency from "../utils/formatCurrency";

type storeType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function StoreItem({ id, name, price, imgUrl }: storeType) {
  const quantity = 1;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="fs-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100"> + Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className=" d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button>-</Button> <span className="fs-3">{quantity} </span>in{" "}
                cart <Button>+</Button>
              </div>
              <Button variant="danger" size="small">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
