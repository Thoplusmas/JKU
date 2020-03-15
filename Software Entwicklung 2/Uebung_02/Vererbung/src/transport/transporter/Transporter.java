package transport.transporter;

import exceptions.OverloadedException;
import exceptions.TransportException;
import exceptions.UnreachableLocationException;
import transport.Cargo;
import transport.Location;

public class Transporter {
    protected String description;
    protected int maximumWeight;
    protected double costPerKM;
    protected Location currentLocation;
    protected Cargo cargo;

    public Transporter(final String description, final double costPerKM, final int maximumWeight,
            final Location currentLocation) {
        this.description = description;
        this.maximumWeight = maximumWeight;
        this.costPerKM = costPerKM;
        this.currentLocation = currentLocation;
    }

    /**
     * Sets the new destination and calculates the cost based on distance and
     * costPerKm
     * 
     * @param destination
     * @return
     * @throws UnreachableLocationException
     */
    public double goTo(final Location destination) throws UnreachableLocationException {
        final double costForTransport = this.costPerKM * this.currentLocation.getDistance(destination);
        this.currentLocation = destination;
        return costForTransport;
    }

    /**
     * Loads a cargo. Only allows one cargo with a maximum weight and certain types
     * based on class
     * 
     * @param c
     * @throws Exception
     */
    public void load(final Cargo c) throws TransportException {
        if (c.getWeight() > this.maximumWeight || this.cargo != null) {
            throw new OverloadedException("Loading this cargo is not allowed");
        }
        this.cargo = c;
        // TODO: figure out if we should set the cargo here to, or if this would not
        // make sens
    }

    /**
     * Unloads a cargo by setting cargo to null and returning the cargo
     * 
     * @return
     */
    public Cargo unload() {
        final Cargo cargoToUnload = this.cargo;
        this.cargo = null;
        return cargoToUnload;
    }

    @Override()
    public String toString() {
        return "Description: " + this.description + " | Max. weight: " + this.maximumWeight + " | Cost/KM: "
                + this.costPerKM + " | Current Loc: " + this.currentLocation.toString() + " | Cargo: "
                + this.cargo.toString();
    }

}