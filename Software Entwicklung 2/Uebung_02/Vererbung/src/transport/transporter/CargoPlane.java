package transport.transporter;

import exceptions.InvalidCargoException;
import exceptions.TransportException;
import transport.Cargo;
import transport.CargoType;
import transport.Location;

public class CargoPlane extends Transporter {
    protected static final double startingCosts = 100;
    protected static final double landingCosts = 100;

    public CargoPlane(final String description, final double costPerKM, final int maximumWeight,
            final Location currentLocation) {
        super(description, costPerKM, maximumWeight, currentLocation);

    }

    /**
     * Sets the new destination and calculates the cost based on distance and
     * costPerKm + static starting and landing costs
     * 
     * @param destination
     * @return
     */
    @Override()
    public double goTo(final Location destination) {
        final double costForTransport = this.costPerKM * this.currentLocation.getDistance(destination) + startingCosts
                + landingCosts;
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
            throw new InvalidCargoException("Liquid Cargo not allowed on a cargo plane");
        }
        super.load(c);

    }

}