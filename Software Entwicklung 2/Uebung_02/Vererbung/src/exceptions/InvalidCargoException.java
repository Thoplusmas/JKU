package exceptions;

public class InvalidCargoException extends CargoException {

    public InvalidCargoException(String msg) {
        super(msg);
    }
}