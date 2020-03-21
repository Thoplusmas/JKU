
import java.io.FileOutputStream;
import java.io.PrintStream;

public class Aufgabe1 {
    public static void main(String[] args) throws Exception {

        // Umleitung der Ausgabe in die Datei Aufgabe1.txt
        System.setOut(new PrintStream(new FileOutputStream("Aufgabe1.txt")));
        System.out.println("Ausgabe für Aufgabe 1:");
        for (int i = -10; i < 0; i++) {
            for (int j = -10; j < 0; j++) {
                System.out.println("ggt of " + i + " and " + j + " is : " + ggt(i, j));
            }
        }
        for (int i = -10; i < 100; i++) {
            for (int j = -10; j < 100; j++) {
                System.out.println("ggt of " + i + " and " + j + " is : " + ggt(i, j));
            }
        }
    }

    // First input/call: 10 3
    // Second call: 3, 10%3 = 1
    // Second input: 3 1
    // Third call: 1 , 3%1 = 0
    // Third input: 1, 0
    // Result: = 1
    /**
     * Findet den größter gemeinsamer Teiler zweier zahlen
     * 
     * @param a
     * @param b
     * @return
     */
    public static int ggt(int a, int b) {
        if (b == 0) {
            return a;
        } else {
            return ggt(b, a % b);
        }
    }

}