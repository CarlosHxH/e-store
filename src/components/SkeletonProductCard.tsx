import React from 'react';
import { Card } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const SkeletonProductCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Skeleton height={200} />
      <Card.Body>
        <Card.Title>
          <Skeleton />
        </Card.Title>
        <Card.Text>
          <Skeleton count={3} />
        </Card.Text>
        <Card.Text>
          <Skeleton width={100} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SkeletonProductCard;
