package resources;

public class AnimalProduct extends Resource {

    public AnimalProduct(String name) {
        super(name);
    }

    @Override
    public float getPower() {
        return this.getPrice() * 2;
    }

    @Override
    public float getCooldown() {
        return 10;
    }

    @Override
    public String toString() {
        return "AnimalProduct: " + super.toString();
    }

}
