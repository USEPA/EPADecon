import { ViewOptions } from 'ol/View';

const commonViewOptions = {
  projection: 'EPSG:4326',
  zoom: 12,
};

const bostonViewOptions: ViewOptions = {
  ...commonViewOptions,
  center: [-71.06, 42.36],
  extent: [-71.185103, 42.226274, -70.915158, 42.407244],
};

const dcViewOptions: ViewOptions = {
  ...commonViewOptions,
  center: [-77.04, 38.9],
  extent: [-77.117038, 38.803448, -76.909686, 39.000073],
};

const newOrleansViewOptions: ViewOptions = {
  ...commonViewOptions,
  center: [-89.97, 30.02],
  extent: [-90.146001, 29.860397, -89.619481, 30.179044],
};

const nycViewOptions: ViewOptions = {
  ...commonViewOptions,
  center: [-73.93, 40.73],
  extent: [-74.261239, 40.486498, -73.692699, 40.926853],
};

const phillyViewOptions: ViewOptions = {
  ...commonViewOptions,
  center: [-75.14, 39.97],
  extent: [-75.280086, 39.866575, -74.942256, 40.145331],
};

const sanFranciscoViewOptions: ViewOptions = {
  ...commonViewOptions,
  center: [-122.44, 37.77],
  extent: [-122.51176, 37.706632, -122.328082, 37.83798],
};

const customViewOptions: ViewOptions = {
  ...commonViewOptions,
};

export {
  bostonViewOptions,
  customViewOptions,
  dcViewOptions,
  newOrleansViewOptions,
  nycViewOptions,
  phillyViewOptions,
  sanFranciscoViewOptions,
};
