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

        [HttpGet]
        public IEnumerable<Registration> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Registration
            {
            })
            .ToArray();
        }

    }
}
