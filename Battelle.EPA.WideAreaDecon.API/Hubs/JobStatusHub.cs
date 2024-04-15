using Battelle.EPA.WideAreaDecon.API.Enumeration.Job;
using Battelle.EPA.WideAreaDecon.API.Interfaces;
using Battelle.EPA.WideAreaDecon.API.Services;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace Battelle.EPA.WideAreaDecon.API.Hubs
{
    /// <summary>
    /// Hub which enables websocket connections to update job status and progress
    /// </summary>
    public class JobStatusHub : Hub<IJobStatusHub>
    {
        private readonly IJobManager _jobManager;
        private readonly JobStatusUpdater _statusUpdater;

        public JobStatusHub(IJobManager jobManager, JobStatusUpdater statusUpdater)
        {
            _jobManager = jobManager;
            _statusUpdater = statusUpdater;
        }

        /// <summary>
        /// Allows user to request to join group receiving status updates on a given job
        /// </summary>
        /// <param name="jobId">The job id</param>
        /// <returns></returns>
        public async Task JoinWatchJobGroup(Guid jobId)
        {
            var job = _jobManager.GetJob(jobId);

            if (job == null)
            {
                return;
            }

            await Groups.AddToGroupAsync(Context.ConnectionId, $"{jobId}");
        }

        /// <summary>
        /// User request to leave the group
        /// </summary>
        /// <param name="jobId">The job</param>
        /// <returns></returns>
        public async Task LeaveWatchJobGroup(Guid jobId)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, $"{jobId}");
        }

        /// <summary>
        /// Updates the progress of a job to a new value
        /// </summary>
        /// <param name="jobId">The job being updated</param>
        /// <param name="newProgress">The new progress value</param>
        public void UpdateJobProgress(Guid jobId, double newProgress)
        {
            var oldJob = _jobManager.GetJob(jobId);
            oldJob.Progress = newProgress;
        }

        /// <summary>
        /// Updates the status of a job to a new value
        /// </summary>
        /// <param name="jobId">The job being updated</param>
        /// <param name="newJobStatus">The new job status</param>
        public void UpdateJobStatus(Guid jobId, JobStatus newJobStatus)
        {
            var oldJob = _jobManager.GetJob(jobId);
            var oldJobStatus = oldJob.Status;
            if (oldJobStatus == newJobStatus)
            {
                return;
            }
            _ = _statusUpdater.UpdateJobStatus(oldJob, newJobStatus);

            Clients.Group($"{jobId}").JobStatusChanged(jobId, newJobStatus);
        }
    }
}
