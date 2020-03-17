package exceptions;

public class UnreachableLocationException extends TransportException {

    public UnreachableLocationException(final String msg) {
        super(msg);
    }

    @Override
    public String toString() {
        return "Unreachable Location Exception: " + msg;
    }
}