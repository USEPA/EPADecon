using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Battelle.EPA.WideAreaDecon.API.Models.Job;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Job;

namespace Battelle.EPA.WideAreaDecon.API.Interfaces
{
    public interface IJobManager
    {
        Task AddToQueue(JobRequest job);
        JobStatus GetStatus(Guid id);
        JobRequest GetJob(Guid id);
        bool UpdateJob(JobRequest newJob);
    }
}
