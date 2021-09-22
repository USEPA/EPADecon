<template>
  <div id="map" ref="rootmap">
    <div style="position: absolute; z-index: 9999; background: ghostwhite; display: flex">
      <div>Geometry type &nbsp;</div>
      <select v-model="typeSelected" @change="getTypeSelected">
        <option value="Point">Point</option>
        <option value="LineString">LineString</option>
        <option value="Polygon">Polygon</option>
        <option value="Circle">Circle</option>
        <option value="None">None</option>
      </select>
    </div>
  </div>
</template>
<script lang="ts">
/* eslint-disable */
// import openlayer css for style
import "ol/ol.css";
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Map from "ol/Map";
import View from "ol/View";
import { defaults as defaultControls, ScaleLine } from "ol/control";
import {Tile as TileLayer, Vector} from 'ol/layer';
import VectorLayer from 'ol/layer/Vector';
import {OSM, Vector as VectorSource} from 'ol/source';
import { Style, Stroke } from 'ol/style';
import Draw from 'ol/interaction/Draw';

@Component
export default class GeospatialDisplay extends Vue{
  mounted() {
    this.initiateMap();
  }

  initiateMap() {
    // create vector layer
    var source = new VectorSource();
    var vector = new VectorLayer({
      source: source
    });
    // create title layer
    var raster = new TileLayer({
      source: new OSM(),
    });
    // create map with 2 layer
    var map = new Map({
      controls: defaultControls().extend([
        new ScaleLine({
          units: "degrees",
        }),
      ]),
      target: "map",
      layers: [raster, vector],
      view: new View({
        projection: "EPSG:4326",
        center: [0, 0],
        zoom: 2,
      }),
    });
    // Add a layer for the drawn line
    this.drawLayer = new VectorLayer({
        //source corresponding to layer
        source: new Vector(),

    })
    //Add layer to the map
    this.map.addLayer(this.drawLayer);
  }

  getTypeSelected() {
    this.draw && this.map.removeInteraction(this.draw);
    //Draw a new Interaction based on the value of typeSelect
    this.addInteraction();
  }

  addInteraction() {
    let value = this.typeSelected;
    if (value !== 'None') {
      this.draw = new Draw({
        source: this.drawLayer.getSource(),
        type: this.typeSelected,
        style: new Style({
          stroke: new Stroke({
            color: 'blue',
            width: 3,
          }),
        }),
      });
      this.map.addInteraction(this.draw);
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  position: absolute;
  margin: 0;
  padding: 0;
  height: 500px;
  width: 99%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>