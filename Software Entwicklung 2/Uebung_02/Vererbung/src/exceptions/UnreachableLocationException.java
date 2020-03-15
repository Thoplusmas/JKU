package exceptions;

public class UnreachableLocationException extends TransportException {

    public UnreachableLocationException(final String msg) {
        super(msg);
    }
}