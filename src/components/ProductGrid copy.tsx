import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SearchInput from './SearchInput';

const ProductGrid = ({data}:any) => {
  const [ prod, setProd ] = React.useState(data);

  function filterBySearch(query:any){
    var updatedList = [...data];
    updatedList = updatedList.filter((item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    setProd(updatedList);
  };
  return (
    <Container>
      <SearchInput onSearch={filterBySearch}/>
      <Row className='p-2'>
        {prod.map((product:any) => (
          <Col key={product.id} xs={6} sm={6} md={4} lg={3} className='my-1'>
            <Card className="h-100">
              <div className='p-1 mx-auto'>
                <Card.Img variant="top" src={product.image} alt={product.title} style={{ height: '140px',width:'auto'}} />
              </div>
              <Card.Body className='relative'>
                <Card.Title className='line-clamp-2 text-sm'>{product.title}</Card.Title>
              </Card.Body>
              <Card.Footer className="text-center">
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="text-muted text-sm" as={'b'}>R${product.price}</Card.Text>
                  <Button className="btn text-light btn-sm p-1 bg-primary">Comprar</Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;