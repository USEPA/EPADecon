using Battelle.EPA.WideAreaDecon.API.Models.Job;

namespace Battelle.EPA.WideAreaDecon.API.Interfaces
{
    /// <summary>
    /// Update's a job's progress and alerts hub clients of change
    /// </summary>
    public interface IJobProgressUpdater
    {
        /// <summary>
        /// Updates job progress
        /// </summary>
        /// <param name="job">The job to be updated</param>
        /// <param name="newJobProgress">The new job progress</param>
        void UpdateJobProgress(JobRequest job, double newJobProgress);
    }
}
