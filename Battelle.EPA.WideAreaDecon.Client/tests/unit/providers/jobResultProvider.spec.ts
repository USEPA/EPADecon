import { expect } from 'chai';
import mockResults from '@/dataMocks/mockResults';
import JobResultProvider from '@/implementations/providers/JobResultProvider';
import PhaseResult from '@/enums/jobs/results/phaseResult';

describe('JobResultProvider tests', () => {
  const results = mockResults;
  const provider = new JobResultProvider();

  it('total cost details are correct', () => {
    // Setup
    const phaseResult = PhaseResult.TotalCost;

    // SUT
    const result = provider.getResultDetails(results, phaseResult);

    // Assert
    expect(result?.minimum).to.be.closeTo(1078140, 0.01);
    expect(result?.maximum).to.be.closeTo(1384618, 0.01);
    expect(result?.mean).to.be.closeTo(1209900.26, 0.01);
    expect(result?.stdDev).to.be.closeTo(64083.67004, 0.01);
  });

  it('total area contaminated details are correct', () => {
    // Setup
    const phaseResult = PhaseResult.AreaContaminated;

    // SUT
    const result = provider.getResultDetails(results, phaseResult);

    // Assert
    expect(result?.minimum).to.be.closeTo(747.8695, 0.01);
    expect(result?.maximum).to.be.closeTo(747.8695, 0.01);
    expect(result?.mean).to.be.closeTo(747.8695, 0.01);
    expect(result?.stdDev).to.be.closeTo(0, 0.01);
  });

  it('total workdays details are correct', () => {
    // Setup
    const phaseResult = PhaseResult.Workdays;

    // SUT
    const result = provider.getResultDetails(results, phaseResult);

    // Assert
    expect(result?.minimum).to.be.closeTo(12.27, 0.01);
    expect(result?.maximum).to.be.closeTo(19.517, 0.01);
    expect(result?.mean).to.be.closeTo(15.27, 0.01);
    expect(result?.stdDev).to.be.closeTo(1.557, 0.01);
  });

  it('total on-site days details are correct', () => {
    // Setup
    const phaseResult = PhaseResult.OnSiteDays;

    // SUT
    const result = provider.getResultDetails(results, phaseResult);

    // Assert
    expect(result?.minimum).to.be.closeTo(105.437, 0.01);
    expect(result?.maximum).to.be.closeTo(152.562, 0.01);
    expect(result?.mean).to.be.closeTo(121.39, 0.01);
    expect(result?.stdDev).to.be.closeTo(10.453, 0.01);
  });

  it('total decontamination rounds details are correct', () => {
    // Setup
    const phaseResult = PhaseResult.DecontaminationRounds;

    // SUT
    const result = provider.getResultDetails(results, phaseResult);

    // Assert
    expect(result?.minimum).to.equal(3.0);
    expect(result?.maximum).to.equal(3.0);
    expect(result?.mean).to.equal(3.0);
    expect(result?.stdDev).to.equal(0.0);
  });

  it('number of values returned is correct', () => {
    // Setup
    const phaseResult = PhaseResult.PhaseCost;
    const count = results.length;

    // SUT
    const result = provider.getResultDetails(results, phaseResult);

    // Assert
    expect(result?.values.length).to.equal(count);
  });

  it('invalid result returns undefined', () => {
    // Setup
    const phaseResult = 'invalid' as PhaseResult;

    // SUT
    const result = provider.getResultDetails(results, phaseResult);

    // Assert
    /* eslint-disable-next-line no-unused-expressions */
    expect(result).to.be.undefined;
  });
});
