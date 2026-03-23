class Vehicle {
constructor(id, type) {
this.id = id;
this.type = type;
this.isDeployed = false;
}
}

class FleetManager {
constructor() {
this.vehicles = [];
}

addVehicle(vehicle) {
this.vehicles.push(vehicle);
}

deployVehicle(id) {
const vehicle = this.vehicles.find(v => v.id === id);
if (vehicle) {
vehicle.isDeployed = true;
return vehicle;
}
return undefined;
}

getAvailableVehicles() {
return this.vehicles.filter(v => v.isDeployed === false);
}
}

// Test
const fleet = new FleetManager();

fleet.addVehicle(new Vehicle("V01","Truck"));
fleet.addVehicle(new Vehicle("V02","Van"));
fleet.addVehicle(new Vehicle("V03","Drone"));

fleet.deployVehicle("V02");

console.log(fleet.getAvailableVehicles());