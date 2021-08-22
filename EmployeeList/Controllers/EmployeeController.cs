using EmployeeList.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                EmployeeContext ctx = new EmployeeContext();

                List<Employee> employees = ctx.Employees.ToList();

                return Ok(employees); // returns 200 status code
            }
            catch (Exception e)
            {
                return StatusCode(500);
            }
        }
    }
}
