using System;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Job;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Parameter;
using Newtonsoft.Json;
using Battelle.EPA.WideAreaDecon.InterfaceData.Models.Results;

namespace Battelle.EPA.WideAreaDecon.API.Models.Job
{
    /// <summary>
    /// Contains all the information related to a job
    /// </summary>
    public class JobRequest
    {
        [JsonProperty]
        public Guid Id { get; set; }

        public double Progress { get; set; }

        public JobStatus Status { get; set; } = JobStatus.New;

        [JsonProperty(Required = Required.Always)]
        public ParameterList DefineScenario { get; set; }

        [JsonProperty(Required = Required.Always)]
        public ParameterList ModifyParameter { get; set; }

        [JsonProperty(Required = Required.Always)]
        public int NumberRealizations { get; set; }

        public List<JobResults> Results { get; set; }
    }
}