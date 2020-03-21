package exceptions;

public class OverloadedException extends CargoException {

    public OverloadedException(final String msg) {
        super(msg);
    }

    @Override
    public String toString() {
        return "Overloaded Exception: " + msg;
    }
}