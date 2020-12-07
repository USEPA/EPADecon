<template>
  <v-container>
    <v-row>
      <v-col><v-spacer /></v-col>
    </v-row>
    <v-row>
      <v-col align-self="center" cols="3">
        <v-overflow-btn
          @change="onDistributionTypeChange"
          class="my-2"
          v-model="currentDistType"
          :items="distNames"
          filled
          dense
        >
          <template v-slot:prepend>
            <p>Distribution:</p>
          </template>
        </v-overflow-btn>
      </v-col>
      <v-col offset="5" cols="3">
        <v-overflow-btn
          @change="onSelectChanged"
          class="my-2"
          :items="selectableValues"
          :item-text="[0]"
          :item-value="[1]"
          v-model="selectedValue"
          filled
          dense
        >
          <template v-slot:prepend>
            <p>Category:</p>
          </template>
        </v-overflow-btn>
      </v-col>
    </v-row>
    <component :key="componentKey" :is="distComponent" :parameter-value="selectedValue"> </component>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import IParameterDisplay from '@/interfaces/component/IParameterDisplay';
import IParameter from '@/interfaces/parameter/IParameter';
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
  @Prop({ required: true }) parameterValue!: EnumeratedParameter;

  selectedValue: IParameter = Object.values(this.parameterValue.values)[0];

  currentDistType: ParameterType = ParameterType.constant;

  distNames: ParameterType[] = changeableDistributionTypes;

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
      default:
        return 'unknown-display';
    }
  }

  get selectableValues(): [string, IParameter][] {
    return Object.entries(this.parameterValue.values);
  }

  onSelectChanged(): void {
    this.currentDistType = this.selectedValue.type ?? ParameterType.constant;
  }

  onDistributionTypeChange(): void {
    this.selectedValue.type = this.currentDistType;
  }

  @Watch('parameterValue')
  onParameterChanged(newValue: EnumeratedParameter): void {
    [this.selectedValue] = Object.values(newValue.values);
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
