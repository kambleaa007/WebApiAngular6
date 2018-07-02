using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebStudentManagement.Models;
using WebStudentManagement.DataStore;

 
namespace WebStudentManagement.Controllers.API
{
    [System.Web.Http.Cors.EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class StudentsController : ApiController
    {
      public static DataStorage ds = new DataStorage();

        // GET: api/Students
        public IEnumerable<Student> Get()
        {
            Console.WriteLine("GET...");           

            return ds.Students;
        }

        // GET: api/Students/5
        public Student Get(int id)
        {
            Console.WriteLine("GET BY ID...");

            return ds.Students.Find(x => x.rollno == id);
        }

        // POST: api/Students
        [HttpPost]
        public IHttpActionResult Post([FromBody] Student student)
        {
             Console.WriteLine("POST...");
                        
            ds.Students.Add(student);
            return Ok();
        }

        // PUT: api/Students/5
        public void Put(int id, [FromBody]Student s)
        {
            Console.WriteLine("PUT BY ID AND OBJECT...");

            Student st = ds.Students.Find(x => x.rollno == id);
            int index = ds.Students.IndexOf(st);
            ds.Students.Remove(st);
            ds.Students.Insert(index, s);
           
        }

        // DELETE: api/Students/5
        public void Delete(int id)
        {
            Console.WriteLine("DELETE BY ID...");

            ds.Students.RemoveAt(id);
        }
    }
}
