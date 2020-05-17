import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import PortfolioCardDetail from "./PortfolioCardDetail";

const PortfolioCard = (props) => {
  const [isOpen, setisOpen] = useState(false);

  const handleToggle = () => {
    setisOpen(!isOpen);
  };

  const { portfolio, children } = props;

  return (
    <span onClick={handleToggle}>
      <PortfolioCardDetail
        toggle={handleToggle}
        portfolio={portfolio}
        isOpen={isOpen}
      />

      <Card className="portfolio-card">
        <CardHeader className="portfolio-card-header">
          {portfolio.position}
        </CardHeader>
        <CardBody>
          <p className="portfolio-card-city">{portfolio.location}</p>
          <CardTitle className="portfolio-card-title">
            {portfolio.title}
          </CardTitle>
          <CardText className="portfolio-card-text">
            {portfolio.description}
          </CardText>
          <div className="readMore">{children}</div>
        </CardBody>
      </Card>
    </span>
  );
};
export default PortfolioCard;
