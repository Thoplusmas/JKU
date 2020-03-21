package app;

import pricing.DiscountRate;
import resources.AnimalProduct;
import resources.Herb;
import resources.Item;
import resources.Potion;

public class App {
    public static void main(String[] args) throws Exception {
        Item chives = new Herb("Schnittlauch", 10, 5);
        Item basil = new Herb("Basilikum", 20, 40);

        Item spiderLeg = new AnimalProduct("Spinnenbein");
        Item chicken = new AnimalProduct("Huhn");

        Item darkpotion = new Potion("Dunkeltrank", chives, spiderLeg);
        Item nightpotion = new Potion("Nachttrank", darkpotion, spiderLeg, basil, chicken);

        test(chives);
        test(basil);
        test(spiderLeg);
        test(chicken);
        test(darkpotion);
        test(nightpotion);
    }

    public static void test(Item itemToTest) {
        System.out.println("START OF TEST FOR ITEM");
        System.out.println("---------------------------------------------");

        System.out.println(itemToTest.toString());
        System.out.println(itemToTest.getPrice());
        System.out.println(itemToTest.getReducedPrice(DiscountRate.HIGH));
        System.out.println(itemToTest.getReducedPrice());
        System.out.println(itemToTest.getPower());
        System.out.println(itemToTest.getCooldown());

        System.out.println("END OF TEST FOR ITEM");
        System.out.println("---------------------------------------------");
    }
}