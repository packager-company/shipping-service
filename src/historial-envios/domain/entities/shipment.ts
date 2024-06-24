export class Shipment {
    constructor(
      public uuid: string,
      public user_uuid: string,
      public origin: string,
      public destination: string,
      public weight: number,
      public base_price: number,
      public additional_charge: number,
      public total_price: number,
      public status_uuid: string
    ) {}
  }
  