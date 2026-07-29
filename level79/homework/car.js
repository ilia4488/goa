
class Car {
    constructor(brand,model) {
        this.brand=brand;
        this.model=model;
    }
    compare(car1, car2){
        if(car1.brand==car2.brand){
            return "ეს მანქანები ერთი ბრენდისაა"
        }else{
            return "ეს მანქანები სხვადასხვა ბრენდისაა";
        }
    }
}
module.exports={
    Car
}

