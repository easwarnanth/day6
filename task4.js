class uberprice{
    constructor(
           name="Customer",
           distance=1,
           price=30,
           driver="Cabdrivername",
           vehicleno="TN09XX9999",
    )
    {
        this.name=name
        this.distance=distance
        this.price=price*distance
        this.driver=driver
        this.vehicleno=vehicleno
        
    }
}
const uberprice1=new uberprice()
console.log("Thaks for the Yourney")
console.log(uberprice1)