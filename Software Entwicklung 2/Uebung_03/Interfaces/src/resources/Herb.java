package resources;

public class Herb extends Resource {
    private final float healingPower;
    private final float decayTime;

    public Herb(String name, float healingPower, float decayTime) {
        super(name);
        this.healingPower = healingPower;
        this.decayTime = decayTime;
    }

    @Override
    public float getPower() {
        return this.healingPower;
    }

    @Override
    public float getCooldown() {
        return this.decayTime;
    }

    @Override
    public String toString() {
        return "Herb: " + super.toString();
    }

}