using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly ILogger<BuggyController> _logger;

        public BuggyController(ILogger<BuggyController> logger)
        {
            _logger = logger;
        }

        [HttpGet("not-found")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails(){Title = "This is a bad request"});
        }

        [HttpGet("unauthorized")]
        public ActionResult GetUnauthorized()
        {
            return Unauthorized();
        }

        [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "The first error.");
            ModelState.AddModelError("Problem2", "The second error.");

            return ValidationProblem();
        }

        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("This is a server error.");
        }
    }
}