using System;

public class AnalysisQuantCalculator
{
    private double SqFtPerWipe { get; set; }
    private double SqFtPerHEPASock { get; set; }
    private double SqFtToBeWiped { get; set; }
    private double SqFtToBeHEPA { get; set; }
    private double CostPerWipeAnalysis { get; set; }
    private double CostPerHEPAAnalysis { get; set; }

    public AnalysisQuantCalculator(double sqFtPerWipe, double sqFtPerHEPASock, double sqFtToBeWiped, double sqFtToBeHEPA, double costPerWipeAnalysis, double costPerHEPAAnalysis)
    {
        SqFtPerWipe = sqFtPerWipe;
        SqFtPerHEPASock = sqFtPerHEPASock;
        SqFtToBeWiped = sqFtToBeWiped;
        SqFtToBeHEPA = sqFtToBeHEPA;
        CostPerWipeAnalysis = costPerWipeAnalysis;
        CostPerHEPAAnalysis = costPerHEPAAnalysis;
	}

	public double CalculateAnalysisQuant()
    {
		return ((SqFtToBeWiped / SqFtPerWipe) * CostPerWipeAnalysis) + ((SqFtToBeHEPA / SqFtPerHEPASock) * CostPerHEPAAnalysis);
	}
}
