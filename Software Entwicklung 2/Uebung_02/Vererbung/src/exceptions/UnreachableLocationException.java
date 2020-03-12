package exceptions;

public class UnreachableLocationException extends TransportException {

    public UnreachableLocationException(String msg) {
        super(msg);
    }
}