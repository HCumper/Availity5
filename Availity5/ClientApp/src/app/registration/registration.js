"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
var Registration = /** @class */ (function () {
    function Registration(FirstName, LastName, NPINumber, TelephoneNumber, Email, AddressLine1, AddressLine2, City, State, zip) {
        if (FirstName === void 0) { FirstName = ''; }
        if (LastName === void 0) { LastName = ''; }
        if (NPINumber === void 0) { NPINumber = ''; }
        if (TelephoneNumber === void 0) { TelephoneNumber = ''; }
        if (Email === void 0) { Email = ''; }
        if (AddressLine1 === void 0) { AddressLine1 = ''; }
        if (City === void 0) { City = ''; }
        if (State === void 0) { State = ''; }
        if (zip === void 0) { zip = ''; }
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.NPINumber = NPINumber;
        this.TelephoneNumber = TelephoneNumber;
        this.Email = Email;
        this.AddressLine1 = AddressLine1;
        this.AddressLine2 = AddressLine2;
        this.City = City;
        this.State = State;
        this.zip = zip;
    }
    return Registration;
}());
exports.Registration = Registration;
//# sourceMappingURL=registration.js.map