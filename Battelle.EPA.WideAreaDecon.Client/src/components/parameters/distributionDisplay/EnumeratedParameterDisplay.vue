<template>
  <v-container>
    <v-row>
      <v-col><v-spacer /></v-col>
    </v-row>
    <template v-if="!isTextDistribution">
      <v-row>
        <v-col cols="4" xl="3">
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
        <v-col cols="4" xl="3" offset="3" offset-xl="5">
          <v-overflow-btn
            @change="onCategoryChanged"
            class="my-2"
            :error-messages="!parameterValue.isSet ? [noAreaErrorMessage] : null"
            :items="categories"
            :item-text="[0]"
            :item-value="[1]"
            v-model="selectedCategory"
            filled
            dense
            ref="categorySelect"
          >
            <template v-slot:prepend>
              <p>Category:</p>
            </template>
            <template v-slot:item="{ item, attrs, on }">
              <v-list-item :class="getClass(item[0])" v-bind="attrs" v-on="on">
                <v-list-item-content>
                  <v-list-item-title :id="attrs['aria-labelledby']" v-text="item[0]" />
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-overflow-btn>
        </v-col>
      </v-row>
      <component :key="getSelectedCategoryName()" :is="display.distComponent" :parameter-value="selectedCategory" />
      <div v-if="display.displayChart" class="py-5" style="width: 100%; height: 400px">
        <distribution-chart
          :data-generator="display.dataGenerator"
          :distribution-series="display.chartData"
          :x-axis-label="display.xAxisLabel"
          :y-axis-label="'Probability of Selection'"
          :force-x-axis-min-zero="false"
        />
      </div>
    </template>
    <template v-else>
      <text-value-display
        :key="getSelectedCategoryName()"
        :is="display.distComponent"
        :parameter-value="parameterValue"
      />
    </template>
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
import BimodalTruncatedNormalDisplay from '@/components/parameters/distributionDisplay/BimodalTruncatedNormalDisplay.vue';
import UniformXDependentDisplay from '@/components/parameters/distributionDisplay/UniformXDependentDisplay.vue';
import TextValueDisplay from '@/components/parameters/distributionDisplay/TextValueDisplay.vue';
import { DistributionChart } from 'battelle-common-vue-charting';
import { changeableDistributionTypes } from '@/mixin/parameterMixin';
import container from '@/dependencyInjection/config';
import IParameterConverter from '@/interfaces/parameter/IParameterConverter';
import TYPES from '@/dependencyInjection/types';
import DistributionDisplay from '@/implementations/parameter/distribution/DistributionDisplay';
import IDistributionDisplayProvider from '@/interfaces/providers/IDistributionDisplayProvider';
import store from '@/store';

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
    BimodalTruncatedNormalDisplay,
    UniformXDependentDisplay,
    DistributionChart,
    TextValueDisplay,
  },
})
export default class EnumeratedParameterDisplay extends Vue implements IParameterDisplay {
  @Prop({ required: true }) parameterValue!: EnumeratedParameter;

  @Prop({ default: () => store.state.PARAMETER_SELECTION.currentSelectedParameter.baseline })
  baseline!: EnumeratedParameter;

  selectedCategory: IParameter = Object.values(this.parameterValue.values)[0];

  // baseline value of selected category
  baselineCategory: IParameter = Object.values(this.baseline.values)[0];

  currentDistType: ParameterType = ParameterType.constant;

  parameterConverter = container.get<IParameterConverter>(TYPES.ParameterConverter);

  get display(): DistributionDisplay {
    return container
      .get<IDistributionDisplayProvider>(TYPES.DistributionDisplayProvider)
      .getDistributionDisplay(this.baselineCategory, this.selectedCategory);
  }

  get distNames(): ParameterType[] {
    if (
      this.categories.find(
        (val) =>
          val[0] === 'Plume Concentration Factor' ||
          val[0] === 'Building Protection Factor' ||
          val[0] === 'Subway Protection Factor' ||
          val[0] === 'Subway Tunnel Width',
      )
    ) {
      return [ParameterType.constant];
    }
    return this.baselineCategory.type === ParameterType.uniformXDependent
      ? [...changeableDistributionTypes, ParameterType.uniformXDependent]
      : changeableDistributionTypes;
  }

  get categories(): [string, IParameter][] {
    return Object.entries(this.parameterValue.values);
  }

  get isTextDistribution(): boolean {
    return this.currentDistType === ParameterType.textValue;
  }

  get noAreaErrorMessage(): string {
    return !this.parameterValue.isSet && Object.values(this.parameterValue.values).every((val) => val.isSet)
      ? 'At least one category must have a definitive area contaminated'
      : '';
  }

  onCategoryChanged(): void {
    this.currentDistType = this.selectedCategory.type ?? ParameterType.constant;

    const category = this.getSelectedCategoryName();
    this.baselineCategory = this.baseline.values[category];
  }

  onDistributionTypeChange(): void {
    const category = this.getSelectedCategoryName();

    this.selectedCategory =
      this.currentDistType === ParameterType.uniformXDependent
        ? this.baselineCategory
        : this.parameterConverter.convertToNewType(this.selectedCategory, this.currentDistType);

    this.parameterValue.values[category] = this.selectedCategory;
  }

  getSelectedCategoryName(): string {
    const values = this.categories;
    const category = values.filter(([, value]) => value === this.selectedCategory)[0]?.[0] ?? '';

    return category;
  }

  getClass(cateogry: string): string {
    const param = this.parameterValue.values[cateogry];
    if (param.isSet === undefined) {
      return '';
    }
    return param.isSet ? '' : `error lighten-2`;
  }

  @Watch('selectedCategory', { deep: true })
  checkErrorHighligtingOnSelect(): void {
    if (this.isTextDistribution) {
      return;
    }

    const el = (this.$refs.categorySelect as Vue).$el.children[1].children[0];
    const errorClasses = ['error', 'lighten-2'];

    if (this.parameterValue.isSet) {
      el.classList.remove(...errorClasses);
    } else {
      el.classList.add(...errorClasses);
    }
  }

  @Watch('parameterValue')
  onParameterChanged(): void {
    if (this.isTextDistribution) {
      return;
    }
    // update selected category, current dist type, and baseline values
    [[, this.selectedCategory]] = this.categories;
    this.currentDistType = this.selectedCategory.type ?? ParameterType.constant;

    [this.baselineCategory] = Object.values(this.baseline.values);
  }

  created(): void {
    this.currentDistType = this.selectedCategory.type;
  }

  mounted(): void {
    this.checkErrorHighligtingOnSelect();
  }
}
</script>

<style scoped lang="scss">
.v-list-item--active.error {
  color: var(--v-primary-base) !important;
}
</style>
