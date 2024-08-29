import { Card } from "react-bootstrap";

type storeType = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: storeType) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="fs-2 text-muted">{price}</span>
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Add to cart</small>
      </Card.Footer>
    </Card>
  );
}
