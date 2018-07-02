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
    public class UsersController : ApiController
    {
        public static DataStorage ds = new DataStorage();

        // GET: api/Users
        public IEnumerable<User> Get()
        {
            return ds.Users;
        }

        // GET: api/Users/5
        public User Get(int id)
        {
            return ds.Users.Find(x => x.Uid == id);
        }

        // POST: api/Users
        public void Post([FromBody]User user)
        {
            ds.Users.Add(user);
        }

        // PUT: api/Users/5
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE: api/Users/5
        public void Delete(int id)
        {
        }
    }
}
