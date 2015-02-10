using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Helpers;
using System.Web.Http;

namespace MvcApplication34.Controllers
{
   
   public class todo
   {
       public string text { get; set; }
       public bool done { get; set; }
       public string deadline { get; set; }
   }
    public class ValuesController : ApiController
    {
        List<todo> todoList = new List<todo>()
        {
            new todo{text="get groceries", deadline = DateTime.Today.ToString("yyyy-mm-dd"),done=false},
            new todo{text="buy a car", deadline = DateTime.Today.ToString("yyyy-mm-dd"),done=false},
            new todo{text="browse reddit ", deadline = DateTime.Today.ToString("yyyy-mm-dd"),done=false}
        };
        

       public HttpResponseMessage Get()
        {
           // write the code to get the data from database.
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.OK,
                Content = new StringContent(Json.Encode(todoList))
            };
        }

        // GET api/values/5
        public HttpResponseMessage Get(int id)
        {
            ArrayList ar = new ArrayList();
            ar.Add("value");
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.OK,
                Content = new StringContent(Json.Encode(ar))
            };
        }

        public todo Post(List<todo> task)
        {
            // write the code to  save the todo task.
            return task[0];
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}