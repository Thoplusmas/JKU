import java.io.FileOutputStream;
import java.io.PrintStream;
import java.util.Arrays;

public class Aufgabe2 {
    public static void main(String[] args) throws Exception {

        // Umleitung der Ausgabe in die Datei Aufgabe2.txt
        System.setOut(new PrintStream(new FileOutputStream("Aufgabe2.txt")));
        System.out.println("Ausgabe für Aufgabe 2:");
        druckePrimzahlen(-100);
        druckePrimzahlen(0);
        druckePrimzahlen(100);
    }

    public static void druckePrimzahlen(int a) {
        if (a < 2) {
            System.out.println("Warnung: Es existieren nur Primzahlen >= 2");
            return;
        }
        boolean[] gestrichen = new boolean[1000];
        Arrays.fill(gestrichen, Boolean.FALSE);
        int sqrtA = (int) Math.sqrt(a);

        for (int i = 2; i <= sqrtA; i++) {
            if (!gestrichen[i]) {
                System.out.println(i + " \t\t is a prim");

                for (int j = i * i; j <= a; j = j + i) {
                    gestrichen[j] = true;
                }
            }
        }
        for (int i = (sqrtA + 1); i <= a; i++) {
            if (!gestrichen[i]) {
                System.out.println(i + " \t\t is a prim");

            }

        }
    }

    public static double polygonflaecheNachPick(int[][] randpunkte) {
        // constraint checking
        int i = 0;
        while (randpunkte[i].length == 0) {
            i++;
        }
        i++;
        while (i < randpunkte.length - 1) {
            if (randpunkte[i].length < 2) {
                System.out.println("Polygon erfüllt die Kriterien nicht. (Zeile: " + i + ")");
                return 0;
            }
            i++;
        }
        // calc amount inner points
        double amountInnerPoints = 0;
        for (int j = 1; j < randpunkte.length - 1; j++) {
            if (randpunkte[j].length == 2) {
                amountInnerPoints += randpunkte[j][1] - randpunkte[j][0] - 1;
            }
        }
        return amountInnerPoints + ((double) anzahlRandpunkte(randpunkte) / 2) - 1;

    }

    public static int anzahlRandpunkte(int[][] randpunkte) {
        int anzahlRandpunkte = 0;
        for (int zeile = 0; zeile < randpunkte.length; zeile++) {
            anzahlRandpunkte += randpunkte[zeile].length;
        }
        return anzahlRandpunkte;
    }

}