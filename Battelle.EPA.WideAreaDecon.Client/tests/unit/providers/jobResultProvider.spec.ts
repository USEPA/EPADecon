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
    expect(result?.minimum).to.be.closeTo(22442075674.027, 0.01);
    expect(result?.maximum).to.be.closeTo(360075430730.016, 0.01);
    expect(result?.mean).to.be.closeTo(54803427303.304, 0.01);
    expect(result?.stdDev).to.be.closeTo(49936000070.016, 0.01);
  });

  it('total area contaminated details are correct', () => {
    // Setup
    const phaseResult = PhaseResult.AreaContaminated;

    // SUT
    const result = provider.getResultDetails(results, phaseResult);

    // Assert
    expect(result?.minimum).to.equal(111040000.000);
    expect(result?.maximum).to.equal(111040000.000);
    expect(result?.mean).to.equal(111040000.000);
    expect(result?.stdDev).to.equal(0.0);
  });

  it('total workdays details are correct', () => {
    // Setup
    const phaseResult = PhaseResult.Workdays;

    // SUT
    const result = provider.getResultDetails(results, phaseResult);

    // Assert
    expect(result?.minimum).to.be.closeTo(80523.688, 0.01);
    expect(result?.maximum).to.be.closeTo(321273.272, 0.01);
    expect(result?.mean).to.be.closeTo(155691.022, 0.01);
    expect(result?.stdDev).to.be.closeTo(50597.539, 0.01);
  });

  it('total on-site days details are correct', () => {
    // Setup
    const phaseResult = PhaseResult.OnSiteDays;

    // SUT
    const result = provider.getResultDetails(results, phaseResult);

    // Assert
    expect(result?.minimum).to.be.closeTo(2394960.319, 0.01);
    expect(result?.maximum).to.be.closeTo(247434425.979, 0.01);
    expect(result?.mean).to.be.closeTo(19293132.792, 0.01);
    expect(result?.stdDev).to.be.closeTo(35808107.753, 0.01);
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
    expect(result).to.be.undefined;
  });
});
