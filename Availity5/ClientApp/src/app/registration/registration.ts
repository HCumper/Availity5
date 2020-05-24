export class Registration {

  constructor(
    public FirstName: string = '',
    public LastName: string = '',
    public NPINumber: string = '',
    public TelephoneNumber: string = '',
    public Email: string = '',
    public AddressLine1: string = '',
    public AddressLine2?: string,
    public City: string = '',
    public StateCode: '' = '',
    public zip: string = '') { }
}
