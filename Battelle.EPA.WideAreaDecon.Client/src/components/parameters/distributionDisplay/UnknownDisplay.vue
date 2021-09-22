<template>
  <v-container>
    <v-row align="center" justify="center" style="margin-top: 96px">
      <v-col>
        <p class="text-center display-3">
          Unknown parameter type <b>{{ parameterValue.type }}</b>
          ...
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import IParameter from '@/interfaces/parameter/IParameter';

@Component
export default class UnknownParameterDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: IParameter;
}
</script>

<style scoped lang="scss"></style>
