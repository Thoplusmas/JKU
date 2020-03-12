package transport.transporter;

import exceptions.InvalidCargoException;
import exceptions.TransportException;
import exceptions.UnreachableLocationException;
import transport.Cargo;
import transport.CargoType;
import transport.Location;

public class ContainerTruck extends Transporter {

    public ContainerTruck(final String description, final double costPerKM, final int maximumWeight,
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
     * not liquid
     * 
     * @param c
     * @throws Exception
     */
    @Override()
    public void load(final Cargo c) throws TransportException {
        if (c.getType() == CargoType.LIQUID) {
            throw new InvalidCargoException("Liquid Cargo not allowed on a container truck");
        }
        super.load(c);

    }

}