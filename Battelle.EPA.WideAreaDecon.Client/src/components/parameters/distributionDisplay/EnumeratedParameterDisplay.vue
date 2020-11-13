<template>
  <v-container>
    <v-row>
      <v-col><v-spacer /></v-col>
    </v-row>
    <v-row>
      <v-col align-self="center" cols="3">
        Parameter:
        <v-overflow-btn
          @change="onSelectChanged"
          class="my-2"
          :items="selectableValues"
          :item-text="[0]"
          :item-value="[1]"
          v-model="selectedValue"
          filled
          dense
        />
      </v-col>
      <v-col align-self="center" cols="3">
        Distribution:
        <v-overflow-btn
          v-if="isChangeableDist"
          @change="onDistributionTypeChange"
          class="my-2"
          v-model="currentDistType"
          :items="distNames"
          filled
          dense
        />
      </v-col>
      <v-col style="margin-top: 7px" cols="2">
        <v-btn height="45" v-if="parameterHasChanged" color="secondary" @click="resetParameter">
          Reset Parameter
        </v-btn>
      </v-col>
    </v-row>
    <!-- <v-divider color="grey"></v-divider> -->
    <component :key="componentKey" :is="distComponent" :selected-parameter="selectedValue"> </component>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import EnumeratedParameter from '@/implementations/parameter/list/enumeratedParameter';
import ParameterType from '@/enums/parameter/parameterType';
import NullDisplay from '@/components/parameters/distributionDisplay/NullDisplay.vue';
import UnknownDisplay from '@/components/parameters/distributionDisplay/UnknownDisplay.vue';
import ConstantDisplay from '@/components/parameters/distributionDisplay/ConstantDisplay.vue';
import LogUniformDisplay from '@/components/parameters/distributionDisplay/LogUniformDisplay.vue';
import BetaPertDisplay from '@/components/parameters/distributionDisplay/BetaPertDisplay.vue';
import TruncatedLogNormalDisplay from '@/components/parameters/distributionDisplay/TruncatedLogNormalDisplay.vue';
import TruncatedNormalDisplay from '@/components/parameters/distributionDisplay/TruncatedNormalDisplay.vue';
import LogNormalDisplay from '@/components/parameters/distributionDisplay/LogNormalDisplay.vue';
import UniformDisplay from '@/components/parameters/distributionDisplay/UniformDisplay.vue';
import WeibullDisplay from '@/components/parameters/distributionDisplay/WeibullDisplay.vue';
import { changeableDistributionTypes } from '@/mixin/parameterMixin';
import container from '@/dependencyInjection/config';
import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import TYPES from '@/dependencyInjection/types';
// import { fromPairs } from 'lodash';

@Component({
  components: {
    NullDisplay,
    UnknownDisplay,
    ConstantDisplay,
    LogUniformDisplay,
    BetaPertDisplay,
    TruncatedLogNormalDisplay,
    TruncatedNormalDisplay,
    UniformDisplay,
    LogNormalDisplay,
    WeibullDisplay,
  },
})
export default class EnumeratedParameterDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) selectedParameter!: ParameterWrapper;

  get parameterValue(): EnumeratedParameter {
    return this.selectedParameter.current as EnumeratedParameter;
  }

  parameterConverter = container.get<IParameterConverter>(TYPES.ParameterConverter);

  selectedValue: any = Object.values(this.parameterValue.values)[0];

  currentDistType = ParameterType.constant;

  distNames = changeableDistributionTypes;

  componentKey = 0;

  get distComponent(): string {
    switch (this.currentDistType) {
      case ParameterType.null:
        return 'null-display';
      case ParameterType.constant:
        return 'constant-display';
      case ParameterType.logUniform:
        return 'log-uniform-display';
      case ParameterType.pert:
        return 'beta-pert-display';
      case ParameterType.truncatedLogNormal:
        return 'truncated-log-normal-display';
      case ParameterType.truncatedNormal:
        return 'truncated-normal-display';
      case ParameterType.logNormal:
        return 'log-normal-display';
      case ParameterType.uniform:
        return 'uniform-display';
      case ParameterType.weibull:
        return 'weibull-display';
      // case ParameterType.enumeratedFraction:
      //   return 'enumerated-fraction-display';
      // case ParameterType.enumeratedParameter:
      //   return 'enumerated-parameter-display';
      default:
        return 'unknown-display';
    }
  }

  get isChangeableDist(): boolean {
    return changeableDistributionTypes.find((p) => p === this.selectedValue.type) !== undefined;
  }

  get parameterHasChanged(): boolean {
    return this.selectedParameter.isChanged();
  }

  get selectableValues(): Array<any> {
    return Object.entries(this.parameterValue.values);
  }

  onSelectChanged(): void {
    this.currentDistType = this.selectedValue.type ?? ParameterType.constant;
  }

  onDistributionTypeChange(): void {
    // remove dist specific properties from selected value
    Object.keys(this.selectedValue).map((key) => {
      if (key !== 'metaData' && key !== 'type') {
        delete this.selectedValue[key];
      }
      return key;
    });

    this.selectedValue.type = this.currentDistType;
  }

  resetParameter(): void {
    this.$store.commit('resetCurrentSelectedParameter');
    this.currentDistType = this.selectedValue.type;
    this.componentKey += 1;
  }

  @Watch('selectedParameter')
  onParameterChanged(newValue: ParameterWrapper): void {
    const cast = newValue.current as EnumeratedParameter;
    [this.selectedValue] = Object.values(cast.values);
    this.currentDistType = this.selectedValue.type ?? ParameterType.constant;
  }

  created(): void {
    this.currentDistType = this.selectedValue.type;
  }
}
</script>

<style lang="scss">
.v-slider__track-container {
  height: 8px !important;
}
.v-slider__track-fill {
  border-radius: 5px !important;
}
.v-slider__track-background {
  border-radius: 5px !important;
}
.v-slider__thumb {
  width: 24px !important;
  height: 24px !important;
  left: -12px !important;
}
.v-slider__thumb:before {
  left: -6px !important;
  top: -6px !important;
}
.theme--light.v-card.v-card--outlined {
  border: 2px solid !important;
  border-color: var(--primary-color) !important;
  border-radius: 5px !important;
}
</style>

<style scoped lang="scss4"></style>
