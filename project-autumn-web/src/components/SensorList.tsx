import React from "react";
import styled from "styled-components";
import Sensor from "../types/Sensor";
import SensorCard from "./SensorCard";

const SensorListContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

interface Props {
    sensors: Sensor[];
}

const SensorList = ({ sensors }: Props) => {
    return (
        <SensorListContainer>
            {sensors.map(sensor => (
                <SensorCard
                    key={sensor.getId()}
                    sensor={sensor}
                    variant={sensor.getType()}
                />
            ))}
        </SensorListContainer>
    );
};

export default SensorList;
