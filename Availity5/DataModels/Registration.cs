using System;
using System.Collections.Generic;
using System.Text;

namespace Availity5.DataModels
{
    public class Registration
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName => $"{FirstName} {LastName}";
        public string NPINumber { get; set; }
        public string TelephoneNumber { get; set; }
        public string Email { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string City { get; set; }
        public string StateCode { get; set; }
        public int Zip { get; set; }
    }
}