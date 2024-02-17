import React, { useRef, useState } from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import Details from "./Details";
import Products from "./Products";



export default function Project() {
  const [drink, setDrink] = useState()
  const [ingredient, setingredient] = useState()
  const drinkRef = useRef()
  const ingredientRef = useRef()


  function usrChoice() {
    const usr_drink = drinkRef.current.value;
    const usr_ingredient = ingredientRef.current.value;
    if (usr_drink !== '' && usr_ingredient === '') setDrink(usr_drink)
    else if (usr_drink === '' && usr_ingredient !== '') setingredient(usr_ingredient)
    drinkRef.current.value = null;
    ingredientRef.current.value = null;
  }


  return (
<div className=" mt-4">
          <Navbar bg="light">
            <Container>
              <Navbar.Brand href="/"><b><em><u>• T h e ☼ C o c t a i l s •</u></em></b></Navbar.Brand>
              <Form className="d-flex">
                <FormControl ref={drinkRef}
                  type="search"
                  placeholder="Drink..."
                  className="mx-2"
                  aria-label="Search"
                />
                <span className="mt-2">or</span>
                <FormControl ref={ingredientRef}
                  type="search"
                  placeholder="Ingredient..."
                  className="mx-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="d-flex flex-row mx-3" onClick={usrChoice}>Search<i className="bi bi-cup-straw"></i></Button>
              </Form>
            </Container>
          </Navbar>
          <Products usrDrink={drink} usrIngredient={ingredient} />
          </div>

  );
}

