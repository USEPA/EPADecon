<template>
  <v-list>
    <v-list-item-group>
      <template v-if="filters.length > 1">
        <v-list-group active-class="secondary--text" v-for="(item, i) in filters" :key="i">
          <template v-slot:activator>
            <v-list-item-icon>
              <v-badge
                offset-y="20"
                v-if="item.numberInvalidParameters() > 0"
                color="error"
                :content="item.numberInvalidParameters()"
              />
            </v-list-item-icon>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-icon>
              <v-icon v-if="item.anyParameterChanged()">fa-edit</v-icon>
            </v-list-item-icon>
          </template>
          <parameter-filter-expansion-panel :filter="item" />
        </v-list-group>
      </template>

      <parameter-filter-expansion-panel v-else :filter="filters[0]" id="singleFilter" />
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import ParameterWrapperFilter from '@/implementations/parameter/ParameterWrapperFilter';
import ParameterWrapperList from '@/implementations/parameter/ParameterWrapperList';
import ParameterWrapper from '@/implementations/parameter/ParameterWrapper';
import { nameof } from 'ts-simple-nameof';
import IAppSettings from '@/interfaces/store/appSettings/IAppSettings';
import { StoreNames } from '@/constants/store/store';
import IParameterSelection from '@/interfaces/store/parameterSelection/IParameterSelection';
import ParameterFilterExpansionPanel from './ParameterFilterExpansionPanel.vue';

@Component({
  components: { ParameterFilterExpansionPanel },
})
export default class ParameterListExpansionPanel extends Vue {
  @State(nameof<IAppSettings>((s) => s.errorIcon), { namespace: StoreNames.APPSETTINGS }) errorIcon!: string;

  @State(nameof<IParameterSelection>((s) => s.currentSelectedParameter), { namespace: StoreNames.PARAMETER_SELECTION })
  currentSelectedParameter!: ParameterWrapper;

  @Prop()
  list!: ParameterWrapperList;

  get filters(): ParameterWrapperFilter[] {
    return this.list.filters;
  }
}
</script>

<style scoped lang="scss">
#singleFilter {
  padding: 0;

  ::v-deep .v-list-item .v-list-item__icon:first-child {
    margin-right: 8px !important;
  }
}
</style>
