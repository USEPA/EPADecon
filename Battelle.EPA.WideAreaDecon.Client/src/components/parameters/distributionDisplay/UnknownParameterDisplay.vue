<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col>
        <p class="text-center display-3">
          Unknown parameter type <b>{{ selectedParameter.type }}</b>...
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import IParameter from '@/interfaces/parameter/IParameter';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';

@Component
export default class UnknownParameterDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) selectedParameter!: IParameter;
}
</script>

<style scoped lang="scss"></style>
