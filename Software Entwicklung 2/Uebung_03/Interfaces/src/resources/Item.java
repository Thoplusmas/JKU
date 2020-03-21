package resources;

import pricing.DiscountRate;
import pricing.Priced;

public abstract class Item implements Priced {

    protected final String name;

    public Item(final String name) {
        this.name = name;
    }

    @Override
    public float getDiscountPercent(final DiscountRate rate) {
        switch (rate) {
            case LOW:
                return 0.01f;
            case MEDIUM:
                return 0.05f;
            case HIGH:
                return 0.15f;
            default:
                return 0.00f;
        }
    }

    public abstract float getPower();

    public abstract float getCooldown();

    @Override
    public String toString() {
        return this.name;
    }
}

/**
 * 
 * Überschreiben sie getPrice() nicht, dies wird von den Kinderklassen
 * implementiert. •
 * 
 * 
 * Jedes Item hat neben dem Preis o einen Namen, o eine Heilkraft Power (dh,
 * beim Verzehr des Items wird die angegebene Menge an Lebensenergie des
 * Spielers wiederhergestellt),
 * 
 * o sowie eine Abklingzeit Cooldown (dh, die Zeit, die verstreichen muss, bis
 * dasselbe Item erneut verzehrt werden kann – angegeben in Sekunden).
 * 
 * • Definieren Sie für die Eigenschaften passende Getter-Methoden,
 * gegebenenfalls als abstrakt, um von den Kinderklassen implementiert zu
 * werden.
 */