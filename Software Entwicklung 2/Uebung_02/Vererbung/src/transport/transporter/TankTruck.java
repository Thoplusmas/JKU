package transport.transporter;

import exceptions.InvalidCargoException;
import exceptions.TransportException;
import exceptions.UnreachableLocationException;
import transport.Cargo;
import transport.CargoType;
import transport.Location;

public class TankTruck extends Transporter {

    public TankTruck(final String description, final double costPerKM, final int maximumWeight,
            final Location currentLocation) {
        super(description, costPerKM, maximumWeight, currentLocation);

    }

    /**
     * Sets the new destination and calculates the cost based on distance and
     * costPerKm
     * 
     * @param destination
     * @return
     * @throws UnreachableLocationException
     */
    @Override()
    public double goTo(final Location destination) throws UnreachableLocationException {
        if (!this.currentLocation.reachableOverland(destination)) {
            throw new UnreachableLocationException("Container truck cannot reach this location");
        }
        final double costForTransport = this.costPerKM * this.currentLocation.getDistance(destination);
        this.currentLocation = destination;
        return costForTransport;
    }

    /**
     * Loads a cargo. Only allows one cargo with a maximum weight and it the type is
     * not solid
     * 
     * @param c
     * @throws Exception
     */
    @Override()
    public void load(final Cargo c) throws TransportException {
        if (c.getType() == CargoType.SOLID) {
            throw new InvalidCargoException("Solid Cargo not allowed on a tank truck");
        }
        super.load(c);

    }

}