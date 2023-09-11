import React, { useState } from "react";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

const SearchInput = ({ onSearch }: any) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: any) => {
    setQuery(event.target.value);
    onSearch(query)
  };

  return (
    <Form>
      <InputGroup className="my-3 w-75 mx-auto">
        <Form.Control
          className="bg-light py-2"
          value={query}
          onChange={handleInputChange}
          placeholder="Pesquise aqui"
          aria-label="Amount (to the nearest dollar)"
        />
        <InputGroup.Text>
          <BiSearch />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
};

export default SearchInput;
