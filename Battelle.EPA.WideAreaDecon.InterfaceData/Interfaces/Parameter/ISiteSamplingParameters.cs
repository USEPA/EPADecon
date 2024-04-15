namespace Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter
{
    /// <summary>
    /// Common parameters to all elements related to sampling of the decon site
    /// </summary>
    public interface ISiteSamplingParameters : ISamplingParameters
    {
        public double FractionSampledWipe { get; set; }
        public double FractionSampledHepa { get; set; }
        public double SurfaceAreaPerWipe { get; set; }
        public double SurfaceAreaPerHepa { get; set; }
        public double WipesPerHrPerTeam { get; set; }
        public double HepaSocksPerHrPerTeam { get; set; }
    }
}
