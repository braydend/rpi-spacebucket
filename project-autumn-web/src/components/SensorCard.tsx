import React from "react";
import styled from "styled-components";
import Sensor from "../types/Sensor";

interface Props {
    sensor: Sensor;
}

const SensorCard = ({ sensor: { name, value } }: Props) => {
    const warning = !value;
    const Card = styled.div`
        display: flex;
        flex-grow: 1;
        background: ${warning ? "#B01622" : "#0A6800"};
        margin: 1rem;
        padding: 1rem;
        border-radius: 4px;
    `;
    return <Card>{name}</Card>;
};

export default SensorCard;