package resources;

public class Potion extends Item {

    private Item[] items;

    public Potion(final String name, final Item... items) {
        super(name);
        this.items = items;
    }

    @Override
    public float getPrice() {
        float price = 0;
        for (Item item : items) {
            price += item.getPrice();
        }
        return price * 1.2f;
    }

    @Override
    public float getPower() {
        float healingPower = 0;
        for (Item item : items) {
            healingPower += item.getPower();
        }
        return healingPower * 2;
    }

    @Override
    public float getCooldown() {
        float decayTime = 0;
        for (Item item : items) {
            if (item.getCooldown() > decayTime) {
                decayTime = item.getCooldown();
            }
        }
        return decayTime * 2;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("Potion: [");
        for (Item item : items) {
            builder.append(item.toString() + ", ");
        }
        builder.replace(builder.length() - 2, builder.length() - 1, " ]");

        return builder.toString();
    }

}

// Klasse Potion
// • Der Preis eines Zaubertranks ergibt sich aus der Summe der Preise der
// beinhalteten Items plus einem Aufschlag von 20%.

// • Die Heilkraft entspricht dem Doppelten der Summe der Heilkräfte der
// beinhalteten Items.

// • Die Abklingzeit entspricht dem Doppelten der maximalen Abklingzeit der
// beinhalteten Items.

// • Diese Werte sollen nicht in Feldern gespeichert werden, sondern
// entsprechend dem Composite-Pattern
// in den einzelnen Gettern berechnet werden.

// • Überschreiben Sie des Weiteren die toString()-Methode, in der Sie "Potion:
// ", gefolgt von
// super.toString(), gefolgt von einer öffnenden eckigen Klammer, gefolgt von
// (durch Beistriche getrennt) den textuellen Darstellungen der beinhaltenden
// Items (abgefragt über toString()) und abschließend gefolgt von einer
// schließenden eckigen Klammer zurückgeben. Verwenden Sie zum Aufbauen dieses
// Strings einen StringBuilder.