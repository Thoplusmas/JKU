package exceptions;

public class InvalidCargoException extends CargoException {

    public InvalidCargoException(final String msg) {
        super(msg);
    }

    @Override
    public String toString() {
        return "Invalid Cargo Exception: " + msg;
    }
}