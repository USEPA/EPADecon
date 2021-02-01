using System;
using System.Linq;
using Battelle.EPA.WideAreaDecon.API.Interfaces;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Job;
using Battelle.EPA.WideAreaDecon.API.Models.Job;

namespace Battelle.EPA.WideAreaDecon.API.Services
{
    public class JobStatusUpdater
    {
        private readonly JobStatus[] _initialJobStatuses = new[] { JobStatus.New, JobStatus.Queued };

        private readonly JobStatus[] _runningJobStatuses = new[] { JobStatus.Running };

        private readonly JobStatus[] _completedJobStatuses = new[] { JobStatus.Completed };

        public void UpdateJobStatus(JobRequest job, JobStatus newJobStatus)
        {
            var oldJobStatus = job.Status;
            job.Status = newJobStatus;
            CheckIfJobCompleted(job, oldJobStatus);
        }

        private void CheckIfJobCompleted(JobRequest job, JobStatus oldJobStatus)
        {
            if (!_runningJobStatuses.Contains(oldJobStatus))
            {
                return;
            }
        }
    }
}
