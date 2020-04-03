import { sensorIdNameMap } from "../consts/ds18b20";
import Sensor, { DS18B20, SensorData } from "../types/Sensor";

export const getNameFromSensorId = (id: string): string | false => {
  const value = sensorIdNameMap.get(id);
  if (value === undefined) return false;
  return value;
};

export const transformDS18B20ToSensor = (
  ds18b20: DS18B20,
  connection: firebase.firestore.Firestore
): Sensor => {
  const { id } = ds18b20;
  const name = getNameFromSensorId(id);
  if (!name) throw Error(`No corresponding name for DS18B20 id: ${id}`);
  return new Sensor(id, name, connection);
};

export const transformDS18B20ArrayToSensorArray = (
  ds18b20Array: DS18B20[],
  connection: firebase.firestore.Firestore
): Sensor[] => {
  return ds18b20Array.map(
    (ds18b20): Sensor => transformDS18B20ToSensor(ds18b20, connection)
  );
};

export const getDataForSensor = (
  sensor: Sensor,
  ds18b20Array: DS18B20[]
): SensorData => {
  const ds18b20 = ds18b20Array.find(
    ({ id }: { id: string }) => id === sensor.getId()
  );
  if (!ds18b20)
    throw Error(`Unable to get data for sensor ID: ${sensor.getId()}`);
  return {
    value: ds18b20.t,
    timestamp: Date.now(),
  };
};
