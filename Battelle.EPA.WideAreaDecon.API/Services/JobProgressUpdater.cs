using Battelle.EPA.WideAreaDecon.API.Hubs;
using Battelle.EPA.WideAreaDecon.API.Interfaces;
using Battelle.EPA.WideAreaDecon.API.Models.Job;
using Microsoft.AspNetCore.SignalR;

namespace Battelle.EPA.WideAreaDecon.API.Services
{
    /// <summary>
    /// <inheritdoc cref="IJobProgressUpdater"/>
    /// </summary>
    public class JobProgressUpdater : IJobProgressUpdater
    {
        private readonly IHubContext<JobStatusHub, IJobStatusHub> _hub;

        /// <summary>
        /// Default constructor
        /// </summary>
        /// <param name="hub">The hub context</param>
        public JobProgressUpdater(IHubContext<JobStatusHub, IJobStatusHub> hub)
        {
            _hub = hub;
        }

        /// <summary>
        /// <inheritdoc cref="IJobProgressUpdater.UpdateJobProgress"/>
        /// </summary>
        public void UpdateJobProgress(JobRequest job, double newJobProgress)
        {
            job.Progress = newJobProgress;

            _hub.Clients.Group($"{job.Id}").JobProgressChanged(job.Id, job.Progress);
        }
    }
}
