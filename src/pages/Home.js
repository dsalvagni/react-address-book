import React from "react";

import Catalog from "components/Catalog/Catalog";
import CatalogHeader from "components/CatalogHeader/CatalogHeader";
import CatalogFooter from "components/CatalogFooter/CatalogFooter";
import CatalogMain from "components/CatalogMain/CatalogMain";
import CatalogDetails from "components/CatalogDetails/CatalogDetails";
import InlineGrid from "components/InlineGrid/InlineGrid";
import InlineGridItem from "components/InlineGrid/InlineGridItem";
import Card from "components/Card/Card";

const Home = () => {
  return (
    <div className="home">
      <CatalogDetails show={true} />
      <Catalog>
        <CatalogHeader />
        <CatalogMain>
          <InlineGrid>
            <InlineGridItem>
              <a href="#">
                <Card
                  imageUrl="https://randomuser.me/api/portraits/women/32.jpg"
                  fullName="Daniel Salvagni"
                  email="danielsalvagni@gmail.com"
                  username="danielsalvagni"
                />
              </a>
            </InlineGridItem>
            <InlineGridItem>
              <a href="#">
                <Card
                  imageUrl="https://randomuser.me/api/portraits/women/32.jpg"
                  fullName="Daniel Salvagni"
                  email="danielsalvagni@gmail.com"
                  username="danielsalvagni"
                />
              </a>
            </InlineGridItem>
            <InlineGridItem>
              <a href="#">
                <Card
                  imageUrl="https://randomuser.me/api/portraits/women/32.jpg"
                  fullName="Daniel Salvagni"
                  email="danielsalvagni@gmail.com"
                  username="danielsalvagni"
                />
              </a>
            </InlineGridItem>
            <InlineGridItem>
              <a href="#">
                <Card
                  imageUrl="https://randomuser.me/api/portraits/women/32.jpg"
                  fullName="Daniel Salvagni"
                  email="danielsalvagni@gmail.com"
                  username="danielsalvagni"
                />
              </a>
            </InlineGridItem>
            <InlineGridItem>
              <a href="#">
                <Card
                  imageUrl="https://randomuser.me/api/portraits/women/32.jpg"
                  fullName="Daniel Salvagni"
                  email="danielsalvagni@gmail.com"
                  username="danielsalvagni"
                />
              </a>
            </InlineGridItem>
            <InlineGridItem>
              <a href="#">
                <Card
                  imageUrl="https://randomuser.me/api/portraits/women/32.jpg"
                  fullName="Daniel Salvagni"
                  email="danielsalvagni@gmail.com"
                  username="danielsalvagni"
                />
              </a>
            </InlineGridItem>
            <InlineGridItem>
              <a href="#">
                <Card
                  imageUrl="https://randomuser.me/api/portraits/women/32.jpg"
                  fullName="Daniel Salvagni"
                  email="danielsalvagni@gmail.com"
                  username="danielsalvagni"
                />
              </a>
            </InlineGridItem>
            <InlineGridItem>
              <a href="#">
                <Card
                  imageUrl="https://randomuser.me/api/portraits/women/32.jpg"
                  fullName="Daniel Salvagni"
                  email="danielsalvagni@gmail.com"
                  username="danielsalvagni"
                />
              </a>
            </InlineGridItem>
          </InlineGrid>
        </CatalogMain>
        <CatalogFooter />
      </Catalog>
    </div>
  );
};

export default Home;
