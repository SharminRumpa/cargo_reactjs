import React, { useState, useEffect } from "react";
import "./App.css";
import { Slider } from "@material-ui/core";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";

function App() {
  let capacity = 239;

  let motorCycleUnits = 3;
  let carUnits = 5;
  let truckUnits = 11;
  let trainUnits = 17;
  let totalWidth = 550;

  const [motorCycleValue, setMotorCycleValue] = useState(4);
  const [carValue, setCarValue] = useState(4);
  const [truckValue, setTruckValue] = useState(2);
  const [trainValue, setTrainValue] = useState(2);

  const [currentLoad, setCurrentLoad] = useState(0);
  const [currentRange, setCurrentRange] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentColor, setCurrentColor] = useState("#c2ab0e");

  let totalMotorCycleValue = motorCycleValue * motorCycleUnits;
  let totalCarValue = carValue * carUnits;
  let totalTruckValue = truckValue * truckUnits;
  let totalTrainValue = trainValue * trainUnits;

  useEffect(() => {
    getCurrentLoadValue();
    getLoadRange();
  });

  const getMotorCycleValue = (e, val) => {
    setMotorCycleValue(val);
    getLoadRange();
  };

  const getCarValue = (e, val) => {
    setCarValue(val);
    getLoadRange();
  };

  const getTruckValue = (e, val) => {
    setTruckValue(val);
    getLoadRange();
  };

  const getTrainValue = (e, val) => {
    setTrainValue(val);
    getLoadRange();
  };

  const getCurrentLoadValue = () => {
    setCurrentLoad(
      totalMotorCycleValue + totalCarValue + totalTrainValue + totalTruckValue
    );
  };

  const getLoadRange = () => {
    console.log(currentLoad);
    setCurrentRange((currentLoad / capacity) * 100);
    if (currentLoad > 239) {
      setCurrentWidth(550);
      setCurrentColor("#f72411");
    } else if (currentLoad == 239) {
      setCurrentWidth((totalWidth / 100) * currentRange);
      setCurrentColor("#31b314");
    } else {
      setCurrentWidth((totalWidth / 100) * currentRange);
      setCurrentColor("#c2ab0e");
    }
  };

  const onClickNewBoat = () => {
    setMotorCycleValue(0);
    setCarValue(0);
    setTruckValue(0);
    setTrainValue(0);
  };

  const mark = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 50,
      label: "50",
    },
  ];

  return (
    <div className="App">
      <div className="image">
        <div
          className="main-content"
          style={{ width: currentWidth, backgroundColor: currentColor }}
        ></div>
      </div>

      <div>
        <h6>
          Capacity = {capacity}, CurresntLoad = {currentLoad}
        </h6>
      </div>

      <Container style={{ padding: 10 }}>
        <Row style={{ padding: 30, paddingBottom: 5 }}>
          <Col>
            <Slider
              value={motorCycleValue}
              valueLabelDisplay="on"
              step={1}
              marks={mark}
              min={0}
              max={50}
              onChange={getMotorCycleValue}
            />
            <p>Motor Cycle (3 units) </p>
          </Col>
          <Col sm={2}></Col>
          <Col>
            <Slider
              value={truckValue}
              valueLabelDisplay="on"
              step={1}
              marks={mark}
              min={0}
              max={50}
              onChange={getTruckValue}
            />
            <p>Truck (11 units) </p>
          </Col>
        </Row>
        <Row style={{ padding: 30, paddingBottom: 5 }}>
          <Col>
            <Slider
              aria-label="Temperature"
              value={carValue}
              valueLabelDisplay="on"
              step={1}
              marks={mark}
              min={0}
              max={50}
              onChange={getCarValue}
            />
            <p>Car (5 units )</p>
          </Col>
          <Col sm={2}></Col>
          <Col>
            <Slider
              aria-label="Temperature"
              value={trainValue}
              valueLabelDisplay="on"
              step={1}
              marks={mark}
              min={0}
              max={50}
              onChange={getTrainValue}
            />
            <p>Train (17 units )</p>
          </Col>
        </Row>
        <Button variant="contained" color="default" onClick={onClickNewBoat}>
          New Boat
        </Button>
      </Container>
    </div>
  );
}

export default App;
