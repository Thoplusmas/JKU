package pricing;

public interface Priced {

    /**
     * Liefert den Preis (in Einheit „Geld“) des jeweiligen Produktes.
     * 
     * @return
     */
    float getPrice();

    /**
     * Liefert den Rabattprozentsatz des jeweiligen Produktes, abhängig von der
     * übergebenen Rabattrate.
     * 
     * @param rate
     * @return
     */
    float getDiscountPercent(DiscountRate rate);

    /**
     * Liefert den Standard-Rabattprozentsatz. Diese Methode soll standardmäßig den
     * Rabattprozentsatz liefern, der mit der Rabattrate DiscountRate.LOW erzielt
     * wird.
     * 
     * @return
     */
    default float getDiscountPercent() {
        return getDiscountPercent(DiscountRate.LOW);
    }

    /**
     * Liefert den Rabatt (in Einheit „Geld“), also jene Menge an Geld, die gespart
     * wird, wenn der Rabattprozentsatz der angegebenen Rabattrate angewendet wird.
     * 
     * @param rate
     * @return
     */
    default float getDiscount(DiscountRate rate) {
        return getPrice() * getDiscountPercent(rate);
    }

    /**
     * Liefert den Standardrabatt (in Einheit „Geld“), also jene Menge an Geld, die
     * gespart wird, wenn der Standard-Rabattprozentsatz angewendet wird.
     * 
     * @return
     */
    default float getDiscount() {
        return getPrice() * getDiscountPercent();
    }

    /**
     * Liefert den verbilligten Preis, also jene Menge an Geld, die bezahlt werden
     * muss, wenn vom Originalpreis der Rabatt entsprechend der angegebenen
     * Rabattrate abgezogen wird.
     * 
     * @param rate
     * @return
     */
    default float getReducedPrice(DiscountRate rate) {
        return getPrice() - getDiscount(rate);
    }

    /**
     * Liefert den verbilligten Preis, also jene Menge an Geld, die bezahlt werden
     * muss, wenn vom Originalpreis der Standardrabatt abgezogen wird.
     * 
     * @return
     */
    default float getReducedPrice() {
        return getPrice() - getDiscount();
    }

}
