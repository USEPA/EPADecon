using System.Collections.Generic;

namespace Battelle.EPA.WideAreaDecon.InterfaceData.Interfaces.Parameter
{
    /// <summary>
    /// Common parameters to all sampling elements
    /// </summary>
    public interface ISamplingParameters : IDeconElementParameters
    {
        public double SamplePackageTime { get; set; }
        public int NumLabs { get; set; }
        public List<double> LabUptimesHours { get; set; }
        public List<double> SampleShippingTime { get; set; }
        public List<double> LabThroughput { get; set; }
        public double ResultTransmissionToIC { get; set; }
    }
}
