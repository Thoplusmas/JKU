package transport;

public class Cargo {
    private final CargoType type;
    private final int weight;
    private final String description;

    public Cargo(final CargoType type, final String description, final int weight) {
        this.type = type;
        this.weight = weight;
        this.description = description;
    }

    public CargoType getType() {
        return type;
    }

    public int getWeight() {
        return weight;
    }

    @Override
    public String toString() {
        return String.format("%1$s with a weight of %2$d and description %3s", this.type, this.weight,
                this.description);
    }

}