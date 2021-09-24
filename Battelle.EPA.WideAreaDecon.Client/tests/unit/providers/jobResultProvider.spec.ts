import { expect } from 'chai';
import mockResults from '@/dataMocks/mockResults';
import JobResultProvider from '@/implementations/providers/JobResultProvider';
import Result from '@/enums/jobs/results/result';

describe('JobResultProvider tests', () => {
  const results = mockResults;
  const provider = new JobResultProvider();

  it('total cost details are correct', () => {
    // Setup
    const elementResult = Result.TotalCost;

    // SUT
    const result = provider.getResultDetails(results, elementResult);

    // Assert
    expect(result?.minimum).to.be.closeTo(105423639, 0.01);
    expect(result?.maximum).to.be.closeTo(585818515, 0.01);
    expect(result?.mean).to.be.closeTo(299191054, 0.01);
    expect(result?.stdDev).to.be.closeTo(90854663.08, 0.01);
  });

  it('total area contaminated details are correct', () => {
    // Setup
    const elementResult = Result.AreaContaminated;

    // SUT
    const result = provider.getResultDetails(results, elementResult);

    // Assert
    expect(result?.minimum).to.be.closeTo(33471.481, 0.01);
    expect(result?.maximum).to.be.closeTo(54379.864, 0.01);
    expect(result?.mean).to.be.closeTo(41874.406, 0.01);
    expect(result?.stdDev).to.be.closeTo(4562.271, 0.01);
  });

  it('total workdays details are correct', () => {
    // Setup
    const elementResult = Result.Workdays;

    // SUT
    const result = provider.getResultDetails(results, elementResult);

    // Assert
    expect(result?.minimum).to.be.closeTo(711.773, 0.01);
    expect(result?.maximum).to.be.closeTo(7590.173, 0.01);
    expect(result?.mean).to.be.closeTo(2869.54, 0.01);
    expect(result?.stdDev).to.be.closeTo(1476.144, 0.01);
  });

  it('total on-site days details are correct', () => {
    // Setup
    const elementResult = Result.OnSiteDays;

    // SUT
    const result = provider.getResultDetails(results, elementResult);

    // Assert
    expect(result?.minimum).to.be.closeTo(5725.696, 0.01);
    expect(result?.maximum).to.be.closeTo(40611.144, 0.01);
    expect(result?.mean).to.be.closeTo(18800.77, 0.01);
    expect(result?.stdDev).to.be.closeTo(6449.312, 0.01);
  });

  it('total decontamination rounds details are correct', () => {
    // Setup
    const elementResult = Result.DecontaminationRounds;

    // SUT
    const result = provider.getResultDetails(results, elementResult);

    // Assert
    expect(result?.minimum).to.equal(2);
    expect(result?.maximum).to.equal(5);
    expect(result?.mean).to.equal(3.65);
    expect(result?.stdDev).to.closeTo(1.5, 0.01);
  });

  it('number of values returned is correct', () => {
    // Setup
    const elementResult = Result.ElementCost;
    const count = results.length;

    // SUT
    const result = provider.getResultDetails(results, elementResult);

    // Assert
    expect(result?.values.length).to.equal(count);
  });

  it('invalid result returns undefined', () => {
    // Setup
    const elementResult = 'invalid' as Result;

    // SUT
    const result = provider.getResultDetails(results, elementResult);

    // Assert
    /* eslint-disable-next-line no-unused-expressions */
    expect(result).to.be.undefined;
  });
});
