package exceptions;

public class CargoException extends TransportException {

    public CargoException(final String msg) {
        super(msg);
    }

    @Override
    public String toString() {
        return "Cargo Exception: " + msg;
    }
}