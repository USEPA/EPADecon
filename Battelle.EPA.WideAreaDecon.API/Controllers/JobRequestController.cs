using System;
using Battelle.EPA.WideAreaDecon.API.Enumeration.Job;
//using Battelle.EPA.WideAreaDecon.API.Interfaces;
//using Battelle.EPA.WideAreaDecon.API.Interfaces.Providers;
//using Battelle.EPA.WideAreaDecon.API.Models.ClientConfiguration;
using Battelle.EPA.WideAreaDecon.API.Models.Job;
//using Battelle.EPA.WideAreaDecon.API.Models.Parameter;
//using Battelle.EPA.WideAreaDecon.API.Providers;
using Battelle.EPA.WideAreaDecon.API.Services;
using Battelle.EPA.WideAreaDecon.API.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Battelle.EPA.WideAreaDecon.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobRequestController : ControllerBase
    {

        private readonly IJobManager _jobManager;

        /// <summary>
        /// Default constructor, requires a non-null provider
        /// </summary>
        /// <param name="configProvider"></param>
        public JobRequestController(IJobManager jobManager)
        {
            _jobManager = jobManager;
        }

        /// <summary>
        /// Retrieves the client configuration from the backend server
        /// </summary>
        /// <returns>The application configuration for the frontend</returns>
        [HttpPost]
        [ProducesResponseType(typeof(Guid), 200)]
        public Guid AddNewJob([FromBody] JobRequest job)
        {
            if (job == null)
            {
                throw new ApplicationException("Need to return bad request to fronted");
                // return bad response
            }

            job.Id = Guid.NewGuid();

            _jobManager.AddToQueue(job);

            return job.Id;
        }

        [HttpGet("status")]
        [ProducesResponseType(typeof(JobStatus), 200)]
        public JobStatus GetJobStatus(Guid id)
        {
            return _jobManager.GetStatus(id);
        }

        [HttpGet]
        [ProducesResponseType(typeof(JobRequest), 200)]
        public JobRequest GetJob(Guid id)
        {
            return _jobManager.GetJob(id);
        }
    }
}