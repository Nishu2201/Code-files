import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Game from '../Images/Game.svg';
import Java from '../Images/JAVA.svg';
import Meta from '../Images/Metaverse.svg';
import Quality from '../Images/Quality.svg';
import service from '../Images/services.svg';
import web from '../Images/Web.svg';
import Blockchain from '../Images/Blockchain.svg';
import devOps from '../Images/devOps.svg';
function FlipCard() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  const cardsData = [
    { img: Game, title: "Game Development", backData: "This is the back data for Game Development card." },
    { img: web, title: "Web Development", backData: "This is the back data for Web Development card." },
    { img: Java, title: "Mobile Development", backData: "This is the back data for Mobile Development card." },
    { img: Blockchain, title: "Blockchain Development", backData: "This is the back data for Blockchain Development card." },
    { img: devOps, title: "DevOps", backData: "This is the back data for DevOps card." },
    { img: Meta, title: "Metaverse Development", backData: "This is the back data for Metaverse Development card." },
    { img: Quality, title: "Quality Assurance", backData: "This is the back data for Quality Assurance card." },
    { img: service, title: "Services", backData: "This is the  data of Qur services." },
    // Add other card data as needed
  ];

  const renderCardColumns = () => {
    return cardsData.map((card, index) => (
      <div key={index} className="col-lg-3" data-aos="fade-right">
        <FlipCardItem img={card.img} title={card.title} backData={card.backData} />
      </div>
    ));
  };

  return (
    <div className="flipCard flipCard-notification">
      <div className="container">
        <div className="row-flip">
          {renderCardColumns()}
        </div>
      </div>
    </div>
  );
}

class FlipCardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
  }

  flip = () => {
    this.setState((prevState) => ({ flipped: !prevState.flipped }));
  };

  render() {
    return (
      <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
        <FlipCardFront img={this.props.img} title={this.props.title} />
        <FlipCardBack backData={this.props.backData} />
      </div>
    );
  }
}

class FlipCardFront extends React.Component {
  render() {
    return (
      <div className="flipCardFront">
        <FlipCardImageArea img={this.props.img} title={this.props.title} />
        <FlipCardMainArea title={this.props.title} />
      </div>
    );
  }
}

class FlipCardBack extends React.Component {
  render() {
    return (
      <div className="flipCardBack">
        <p>{this.props.backData}</p>
      </div>
    );
  }
}

class FlipCardImageArea extends React.Component {
  render() {
    return (
      <div className="flipCardImageArea">
        <img className="card-image" src={this.props.img} alt={this.props.title} />
        <h1 className="title">{this.props.title}</h1>
      </div>
    );
  }
}

class FlipCardMainArea extends React.Component {
  render() {
    return (
      <div className="flipCardMainArea">
        <div className="flipCardPost">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default FlipCard;
