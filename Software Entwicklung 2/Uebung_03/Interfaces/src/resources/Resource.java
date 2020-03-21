package resources;

public abstract class Resource extends Item {

    public Resource(String name) {
        super(name);
    }

    @Override
    public float getPrice() {
        return this.name.length();
    }

}

// Klasse Resource
// • Ist eine abstrake Klasse und stellt die atomaren Teile des Kompositums dar,
// also jene Items, die sich aus keinen weiteren Items zusammensetzen.
// • Entwickeln Sie einen Konstruktor, der den Namen der Ressource
// entgegennimmt.
// • Der Preis einer Resource ergibt sich aus der Länge des Namens, dh, die
// Ressource kostet ein Geld pro Buchstabe im Namen. Beispiele: Ein „Ei“ kostet
// 2 Geld, „Schnittlauch“ kostet 12 Geld. Überschreiben Sie
// den Preis-Getter entsprechend.