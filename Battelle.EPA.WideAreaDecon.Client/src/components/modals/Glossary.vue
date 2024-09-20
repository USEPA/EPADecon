<template>
  <v-dialog v-model="isVisible" max-width="800">
    <v-card>
      <v-card-title class="text-heading-1"> Glossary of Probability Distributions </v-card-title>
      <v-card-text class="text-body-1">
        <p>
          Welcome to the Glossary! Here, you&apos;ll find definitions and explanations of key probability distributions
          used throughout this tool. These distributions are essential for modeling uncertainty and making data-driven
          decisions across various scenarios.
        </p>
        <p>
          As you navigate the tool, you&apos;ll be able to apply and modify these probability distributions to suit your
          specific needs. Each distribution offers a unique way to represent potential outcomes, allowing you to make
          more informed decisions based on statistical insights.
        </p>
        <p>
          Feel free to explore the glossary to understand how each distribution works and how it can be applied in
          decision-making. As you proceed to different sections of the tool, you&apos;ll have the option to customize
          values according to these distributions, enabling precise control over the probability selection in your
          decision-making process.
        </p>

        <ul id="distribution-list">
          <li>
            <span class="font-weight-bold">Normal Distribution (Gaussian Distribution)</span>: A symmetric distribution
            where most values cluster around a central mean, with probabilities tapering off equally on both sides.
            <ul>
              <li>
                Use: Useful for modeling scenarios where outcomes naturally form around an average, like forecasting
                demand or error predictions.
              </li>
            </ul>
          </li>

          <li>
            <span class="font-weight-bold">Uniform Distribution</span>: A distribution where all outcomes are equally
            likely within a given range.
            <ul>
              <li>
                Use: Ideal when each decision outcome has the same likelihood, such as in random selection or fair
                processes.
              </li>
            </ul>
          </li>

          <li>
            <span class="font-weight-bold">Binomial Distribution</span>: Models the number of successes in a fixed
            number of trials, each with the same probability of success.
            <ul>
              <li>
                Use: Applicable in decision-making scenarios involving yes/no outcomes, like predicting the success of a
                project or task completion.
              </li>
            </ul>
          </li>

          <li>
            <span class="font-weight-bold">Poisson Distribution</span>: Describes the probability of a given number of
            events occurring within a fixed interval of time or space.
            <ul>
              <li>
                Use: Helps in scenarios like predicting the number of customer arrivals in a given period or the
                likelihood of rare events.
              </li>
            </ul>
          </li>

          <li>
            <span class="font-weight-bold">Exponential Distribution</span>: A distribution that models the time between
            events in a Poisson process, where events occur continuously and independently.
            <ul>
              <li>
                Use: Useful for decision-making related to waiting times, such as equipment failures or service
                intervals.
              </li>
            </ul>
          </li>

          <li>
            <span class="font-weight-bold">Beta Distribution</span>: A continuous probability distribution defined on
            the interval [0, 1], often used to model uncertainty in probabilities.
            <ul>
              <li>
                Use: Valuable for probabilistic decision support when estimating proportions or probabilities, like the
                likelihood of success based on prior data.
              </li>
            </ul>
          </li>

          <li>
            <span class="font-weight-bold">Gamma Distribution</span>: A two-parameter family of continuous distributions
            used to model the time until a specified number of events occur.
            <ul>
              <li>
                Use: Helpful for risk assessments and reliability analysis, such as time until system failure or repair
                durations.
              </li>
            </ul>
          </li>

          <li>
            <span class="font-weight-bold">Log-Normal Distribution</span>: A distribution of a variable whose logarithm
            is normally distributed, meaning it skews to the right.
            <ul>
              <li>
                Use: Useful for modeling variables that grow exponentially, like stock prices or income distributions.
              </li>
            </ul>
          </li>

          <li>
            <span class="font-weight-bold">Geometric Distribution</span>: Describes the probability that the first
            success occurs on a specific trial in a series of independent trials.
            <ul>
              <li>
                Use: Suitable for decision scenarios that track the likelihood of the first success or event in
                sequential trials, such as customer acquisition.
              </li>
            </ul>
          </li>

          <li>
            <span class="font-weight-bold">Weibull Distribution</span>: A flexible distribution used to model the time
            until an event, such as failure, with parameters controlling shape and scale.
            <ul>
              <li>Use: Commonly applied in survival analysis, reliability testing, and risk management scenarios.</li>
            </ul>
          </li>
        </ul>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn outlined color="primary darken-1" text @click="isVisible = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { VModel } from 'vue-property-decorator';

@Component
export default class Glossary extends Vue {
  @VModel({ default: false }) isVisible!: boolean;
}
</script>

<style lang="scss" scoped>
#distribution-list > li {
  margin-top: 30px;

  & > li {
    margin-top: 12px;
  }
}
</style>
