import React from "react";
import { Heading1, Heading2, Heading4 } from "../headings/headings";
import Img1 from "../images/img1";
import CustomList from "../list/customList";
import { Recipe } from "../fakeApiData/recipeData";

const Recipes = () => {
  return (
    <div>
      {Recipe.map((eachRecipe) => {
        const { name, id, cuisine, ingredients, image, instructions, rating } =
          eachRecipe;
        return (
          <>
            <Heading1 text={`${id} ${name}`} />
            <Heading4 text={cuisine} />
            <Img1 src={image} height={150} width={200} />
            <Heading2>Ingrediants</Heading2>
            <CustomList list={ingredients} />

            <Heading2>Instructions</Heading2>
            <CustomList list={instructions} />
            <Heading4 text={`Rating :${rating}`} />
          </>
        );
      })}
    </div>
  );
};

export default Recipes;
