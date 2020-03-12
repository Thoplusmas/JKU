package transport;

public class Cargo {
    private final CargoType type;
    private int weight;
    private String description;

    public Cargo(CargoType type, String description, int weight) {
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

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}