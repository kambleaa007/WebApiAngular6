using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebStudentManagement.Models
{
    public class Student
    {
        public int Sid { set; get; }
        public string fname { set; get; }
        public string lname { set; get; }
        public string standard { set; get; }
        public string division { set; get; }
        public int rollno { set; get; }
        public string address { set; get; }

        public int marks { set; get; }

        public string grade { set; get; }

        public float discount { set; get; }


      
    }
}