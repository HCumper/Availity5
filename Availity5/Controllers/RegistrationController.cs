using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Availity5.DataModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Availity5.Controllers
{
    [ApiController]
    [Route("[controller]")]

    class RegistrationController
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<RegistrationController> _logger;

        public RegistrationController(ILogger<RegistrationController> logger)
        {
            _logger = logger;
        }

        [HttpPut]
        public StatusCodeResult AddRegistration(dynamic registration)
        {
            // do somthing useful with it
            return new OkResult();
        }

    }
}
