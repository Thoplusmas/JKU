package exceptions;

public class TransportException extends Exception {

    protected String msg;

    public TransportException(final String msg) {
        super(msg);
        this.msg = msg;
    }

    @Override
    public String toString() {
        return "Transport Exception: " + msg;
    }
}