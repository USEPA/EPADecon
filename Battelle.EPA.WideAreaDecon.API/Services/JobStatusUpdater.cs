using Battelle.EPA.WideAreaDecon.API.Enumeration.Job;
using Battelle.EPA.WideAreaDecon.API.Hubs;
using Battelle.EPA.WideAreaDecon.API.Interfaces;
using Battelle.EPA.WideAreaDecon.API.Models.Job;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Battelle.EPA.WideAreaDecon.API.Services
{
    /// <summary>
    /// <inheritdoc cref="IJobStatusUpdater"/>
    /// </summary>
    public class JobStatusUpdater : IJobStatusUpdater
    {
        private readonly JobStatus[] _initialJobStatuses = new[] { JobStatus.New, JobStatus.Queued };

        private readonly JobStatus[] _runningJobStatuses = new[] { JobStatus.Running };

        //private readonly JobStatus[] _completedJobStatuses = new[] { JobStatus.Completed };

        private readonly IHubContext<JobStatusHub, IJobStatusHub> _hub;

        /// <summary>
        /// Default constructor
        /// </summary>
        /// <param name="hub">The hub context</param>
        public JobStatusUpdater(IHubContext<JobStatusHub, IJobStatusHub> hub)
        {
            _hub = hub;
        }

        /// <summary>
        /// <inheritdoc cref="IJobStatusUpdater.UpdateJobStatus"/>
        /// </summary>
        public async Task UpdateJobStatus(JobRequest job, JobStatus newJobStatus)
        {
            var oldJobStatus = job.Status;
            job.Status = newJobStatus;
            CheckIfJobStarted(job, oldJobStatus);
            CheckIfJobCompleted(job, oldJobStatus);

            await _hub.Clients.Group($"{job.Id}").JobStatusChanged(job.Id, job.Status);
        }

        private void CheckIfJobStarted(JobRequest job, JobStatus oldStatus)
        {
            if (!_initialJobStatuses.Contains(oldStatus))
            {
                return;
            }

            //// TODO Track time it takes to complete a job
            //if (_runningJobStatuses.Contains(job.Status))
            //{
            //    job.Started = DateTime.Now;
            //}
        }

        private void CheckIfJobCompleted(JobRequest job, JobStatus oldJobStatus)
        {
            if (!_runningJobStatuses.Contains(oldJobStatus))
            {
                return;
            }

            //// TODO Track time it takes to complete a job
            //if (_completedJobStatuses.Contains(job.Status))
            //{
            //    job.Completed = DateTime.Now;
            //}
        }
    }
}
