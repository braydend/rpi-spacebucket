import React from "react";
import styled from "styled-components";
import Sensor from "../types/Sensor";
import SensorCard, { SensorCardVariant } from "./SensorCard";

const SensorListContainer = styled.div`
    display: flex;
    justify-content: space-around;
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
                    variant={SensorCardVariant.Temperature}
                />
            ))}
        </SensorListContainer>
    );
};

export default SensorList;
