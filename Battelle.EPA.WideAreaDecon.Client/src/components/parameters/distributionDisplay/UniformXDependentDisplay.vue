<template>
  <v-container> </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import UniformXDependent from '@/implementations/parameter/distribution/UniformXDependent';
import { Key } from 'ts-keycode-enum';

@Component
export default class UniformXDependentDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: UniformXDependent;
}
</script>

<style scoped lang="scss"></style>
