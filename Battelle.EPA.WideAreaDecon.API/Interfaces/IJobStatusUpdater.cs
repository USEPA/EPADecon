using Battelle.EPA.WideAreaDecon.API.Enumeration.Job;
using Battelle.EPA.WideAreaDecon.API.Models.Job;
using System.Threading.Tasks;

namespace Battelle.EPA.WideAreaDecon.API.Interfaces
{
    /// <summary>
    /// Provides status updates to the SignalR Hub for the given job request
    /// </summary>
    public interface IJobStatusUpdater
    {
        /// <summary>
        /// Updates a job status and notifies the hub.
        /// </summary>
        /// <param name="job">The job to update</param>
        /// <param name="newJobStatus">The new status</param>
        /// <returns></returns>
        Task UpdateJobStatus(JobRequest job, JobStatus newJobStatus);
    }
}
