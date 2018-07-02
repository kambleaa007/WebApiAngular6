using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebStudentManagement.Models;

namespace WebStudentManagement.DataStore
{
    public class DataStorage
    {
       public Student s;
       public User u;

       public List<Student> Students { set; get; }
       public List<User> Users { set; get; }

       public DataStorage() {
            Students = new List<Student>();
            Users = new List<User>();

            UserInitialization();
        }




        public void UserInitialization() {
            User test = new User();
            test.UserName = "test";
            test.Password = "test";
            Users.Add(test);
        }
    }
}