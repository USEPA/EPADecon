using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using Battelle.EPA.WideAreaDecon.API.Models.City;
using System.Collections.Generic;
using Battelle.EPA.WideAreaDecon.API.Services;

namespace Battelle.EPA.WideAreaDecon.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityDataController : ControllerBase
    {
        private readonly CityDataLinksService _linkProvider;

        public CityDataController(CityDataLinksService links)
        {
            _linkProvider = links;
        }

        /// <summary>
        /// Get availiable city links
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [ProducesResponseType(typeof(CityLinks), 200)]
        [ProducesResponseType(400)]
        public ActionResult<CityLinks> GetLinks(
        )
        {
            return new OkObjectResult(_linkProvider.cl);
        }

    }
}